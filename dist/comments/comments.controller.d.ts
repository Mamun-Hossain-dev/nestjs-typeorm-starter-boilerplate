import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(dto: CreateCommentDto): Promise<import("./entities/comment.entity").Comment>;
    findByPost(postId: number): Promise<import("./entities/comment.entity").Comment[]>;
}
