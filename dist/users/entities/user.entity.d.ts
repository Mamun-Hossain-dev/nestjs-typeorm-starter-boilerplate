import { Post } from '../../posts/entities/post.entity';
import { Comment } from '../../comments/entities/comment.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    posts: Post[];
    comments: Comment[];
}
