import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(dto: CreateTagDto): Promise<import("./entities/tag.entity").Tag>;
    findAll(): Promise<import("./entities/tag.entity").Tag[]>;
}
