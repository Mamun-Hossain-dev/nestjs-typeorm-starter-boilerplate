import { CreatePostDto } from './dto/create-post.dto';
import { UsersService } from '../users/users.service';
import { TagsService } from '../tags/tags.service';
import { Post } from './entities/post.entity';
import { IPostsRepository } from './posts.repository.interface';
export declare class PostsService {
    private readonly postsRepository;
    private readonly usersService;
    private readonly tagsService;
    constructor(postsRepository: IPostsRepository, usersService: UsersService, tagsService: TagsService);
    create(dto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    findByTagName(tagName: string): Promise<Post[]>;
}
