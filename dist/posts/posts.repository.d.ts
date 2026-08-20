import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { IPostsRepository } from './posts.repository.interface';
export declare class PostsRepository implements IPostsRepository {
    private readonly repo;
    constructor(repo: Repository<Post>);
    create(data: Partial<Post>): Promise<Post>;
    findAll(): Promise<Post[]>;
    findById(id: number): Promise<Post | null>;
    findByTagName(tagName: string): Promise<Post[]>;
}
