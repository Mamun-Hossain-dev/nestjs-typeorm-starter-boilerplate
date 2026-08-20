import { CreateCommentDto } from './dto/create-comment.dto';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';
import { Comment } from './entities/comment.entity';
import { ICommentsRepository } from './comments.repository.interface';
export declare class CommentsService {
    private readonly commentsRepository;
    private readonly usersService;
    private readonly postsService;
    constructor(commentsRepository: ICommentsRepository, usersService: UsersService, postsService: PostsService);
    create(dto: CreateCommentDto): Promise<Comment>;
    findByPost(postId: number): Promise<Comment[]>;
}
