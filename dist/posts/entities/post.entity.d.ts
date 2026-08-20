import { User } from '../../users/entities/user.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Tag } from '../../tags/entities/tag.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    author: User;
    comments: Comment[];
    tags: Tag[];
}
