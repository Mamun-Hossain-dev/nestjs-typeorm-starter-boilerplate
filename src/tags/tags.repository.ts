import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { Tag } from './entities/tag.entity'
import { ITagsRepository } from './tags.repository.interface'

@Injectable()
export class TagsRepository implements ITagsRepository {
  constructor(
    @InjectRepository(Tag)
    private readonly repo: Repository<Tag>,
  ) {}

  create(data: Partial<Tag>): Promise<Tag> {
    const tag = this.repo.create(data)
    return this.repo.save(tag)
  }

  findAll(): Promise<Tag[]> {
    return this.repo.find()
  }

  findByName(name: string): Promise<Tag | null> {
    return this.repo.findOneBy({ name })
  }

  findByIds(ids: number[]): Promise<Tag[]> {
    if (!ids || ids.length === 0) return Promise.resolve([])
    return this.repo.findBy({ id: In(ids) })
  }
}
