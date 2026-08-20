import { Comment } from './entities/comment.entity';
export declare const COMMENTS_REPOSITORY: unique symbol;
export interface ICommentsRepository {
    create(data: Partial<Comment>): Promise<Comment>;
    findByPostId(postId: number): Promise<Comment[]>;
}
