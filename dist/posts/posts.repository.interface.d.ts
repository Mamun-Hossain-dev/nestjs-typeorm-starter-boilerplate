import { Post } from './entities/post.entity';
export declare const POSTS_REPOSITORY: unique symbol;
export interface IPostsRepository {
    create(data: Partial<Post>): Promise<Post>;
    findAll(): Promise<Post[]>;
    findById(id: number): Promise<Post | null>;
    findByTagName(tagName: string): Promise<Post[]>;
}
