import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { ITagsRepository } from './tags.repository.interface';
export declare class TagsRepository implements ITagsRepository {
    private readonly repo;
    constructor(repo: Repository<Tag>);
    create(data: Partial<Tag>): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findByName(name: string): Promise<Tag | null>;
    findByIds(ids: number[]): Promise<Tag[]>;
}
