import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { ICommentsRepository } from './comments.repository.interface';
export declare class CommentsRepository implements ICommentsRepository {
    private readonly repo;
    constructor(repo: Repository<Comment>);
    create(data: Partial<Comment>): Promise<Comment>;
    findByPostId(postId: number): Promise<Comment[]>;
}
