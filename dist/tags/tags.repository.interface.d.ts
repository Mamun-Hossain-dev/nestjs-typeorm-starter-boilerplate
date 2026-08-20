import { Tag } from './entities/tag.entity';
export declare const TAGS_REPOSITORY: unique symbol;
export interface ITagsRepository {
    create(data: Partial<Tag>): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findByName(name: string): Promise<Tag | null>;
    findByIds(ids: number[]): Promise<Tag[]>;
}
