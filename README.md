# NestJS + TypeORM Clean Architecture — Practice Project

## Setup
```bash
npm install
cp .env.example .env
docker-compose up -d          # Start PostgreSQL
npm run migration:generate src/migrations/Init
npm run migration:run
npm run start:dev
```

## Architecture Decisions

**Feature-based module structure** — Each domain (User, Post, Comment, Tag) keeps its
entity/dto/repository/service/controller together in its own folder. Cross-domain
dependencies (for example, using PostsService and UsersService) are explicitly exposed
through the module's `exports`; direct Repository access never leaks into another module.
This is a practical application of **Dependency Inversion** and **module encapsulation**.

**Custom Repository Layer (3-layer separation)**

```
Controller  →  Service (business logic)  →  Repository (data access)  →  TypeORM  →  DB
```

Each module has a separate `*.repository.ts` file that contains only raw DB operations
(`findById`, `findByEmail`, `createQueryBuilder`, etc.). `*.service.ts` never imports
TypeORM's `Repository<T>` directly; it only knows about its own Repository class.

Why this layer is separated:
- **Testability**: Unit testing a Service does not require mocking TypeORM; mocking a simple Repository class is enough.
- **ORM independence**: If you move from TypeORM to another data layer, only the Repository needs to change; the Service remains untouched.
- **Business logic vs data access separation**: `UsersService.create()` contains the duplicate-email check (business rule), while the actual `INSERT` query stays in `UsersRepository` — they are not mixed.

Trade-off: This extra layer adds boilerplate to a small CRUD app, but it is industry-standard
practice for team-based or long-term maintained backends.

## Relations Summary

| Relation | Owning side | FK column |
|---|---|---|
| User (1) — Post (N) | Post | `posts.user_id` |
| User (1) — Comment (N) | Comment | `comments.user_id` |
| Post (1) — Comment (N) | Comment | `comments.post_id` |
| Post (N) — Tag (N) | Post (`@JoinTable`) | junction table `post_tags` |

## N+1 Prevention
All `findAll`/`findOne` methods use the `relations` option for explicit JOINs;
no separate queries are executed inside loops. `findByTagName` demonstrates a single
JOIN with filtering through `QueryBuilder`.

## API Endpoints
```
POST   /users              { name, email }
GET    /users
GET    /users/:id

POST   /tags               { name }
GET    /tags

POST   /posts               { title, content, authorId, tagIds? }
GET    /posts
GET    /posts?tag=nestjs
GET    /posts/:id

POST   /comments            { content, authorId, postId }
GET    /comments/post/:postId
```
