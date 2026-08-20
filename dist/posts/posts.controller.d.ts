import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(dto: CreatePostDto): Promise<import("./entities/post.entity").Post>;
    findAll(tag?: string): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: number): Promise<import("./entities/post.entity").Post>;
}
