# NestJS + TypeORM Clean Architecture — Practice Project

## Setup
```bash
npm install
cp .env.example .env
docker-compose up -d          # PostgreSQL চালু
npm run migration:generate src/migrations/Init
npm run migration:run
npm run start:dev
```

## Architecture Decisions

**Feature-based module structure** — প্রতিটা domain (User, Post, Comment, Tag) এর
entity/dto/repository/service/controller একসাথে নিজের folder এ থাকে। Cross-domain কাজ
(যেমন PostsService, UsersService ব্যবহার করে) module এর `exports` দিয়ে
explicit ভাবে expose হয় — direct Repository access কখনো অন্য module এ leak হয় না।
এটাই **Dependency Inversion** এবং **module encapsulation** এর বাস্তব প্রয়োগ।

**Custom Repository Layer (3-layer separation)**

```
Controller  →  Service (business logic)  →  Repository (data access)  →  TypeORM  →  DB
```

প্রতিটা module এ একটা আলাদা `*.repository.ts` ফাইল আছে যেটা শুধু raw DB operations
রাখে (`findById`, `findByEmail`, `createQueryBuilder` ইত্যাদি)। `*.service.ts` কখনো
TypeORM এর `Repository<T>` সরাসরি import করে না — শুধু নিজের Repository class জানে।

কেন এই layer আলাদা করা হলো:
- **Testability**: Service unit test করতে TypeORM mock করার দরকার নেই, শুধু simple Repository class mock করলেই হয়
- **ORM independence**: TypeORM থেকে অন্য কোনো data layer এ move করলে শুধু Repository বদলাতে হবে, Service touch করা লাগবে না
- **Business logic vs data access আলাদা থাকা**: `UsersService.create()` এ duplicate-email check (business rule) থাকে, কিন্তু actual `INSERT` query `UsersRepository` এ থাকে — mixing হয় না

Trade-off: ছোট CRUD app এ এই extra layer boilerplate বাড়ায়, কিন্তু team-based/
long-term maintained backend এ এটা industry standard practice।

## Relations Summary

| Relation | Owning side | FK column |
|---|---|---|
| User (1) — Post (N) | Post | `posts.user_id` |
| User (1) — Comment (N) | Comment | `comments.user_id` |
| Post (1) — Comment (N) | Comment | `comments.post_id` |
| Post (N) — Tag (N) | Post (`@JoinTable`) | junction table `post_tags` |

## N+1 Prevention
সব `findAll`/`findOne` এ `relations` option দিয়ে explicit JOIN করা হয়েছে,
কোথাও loop এর ভেতরে আলাদা query চালানো হয়নি। `findByTagName` এ
`QueryBuilder` দিয়ে filtering সহ single JOIN দেখানো হয়েছে।

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
