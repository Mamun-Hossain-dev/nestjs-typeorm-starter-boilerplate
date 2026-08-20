import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';
export declare class Comment {
    id: number;
    content: string;
    createdAt: Date;
    author: User;
    post: Post;
}
