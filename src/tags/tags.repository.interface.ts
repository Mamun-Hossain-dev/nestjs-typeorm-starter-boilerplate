import { Tag } from './entities/tag.entity'

export const TAGS_REPOSITORY = Symbol('TAGS_REPOSITORY')

export interface ITagsRepository {
  create(data: Partial<Tag>): Promise<Tag>
  findAll(): Promise<Tag[]>
  findByName(name: string): Promise<Tag | null>
  findByIds(ids: number[]): Promise<Tag[]>
}
