import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './entities/tag.entity';
import { ITagsRepository } from './tags.repository.interface';
export declare class TagsService {
    private readonly tagsRepository;
    constructor(tagsRepository: ITagsRepository);
    create(dto: CreateTagDto): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findByIds(ids: number[]): Promise<Tag[]>;
}
