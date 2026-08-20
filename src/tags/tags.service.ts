import {
  Injectable,
  ConflictException,
  NotFoundException,
  Inject,
} from '@nestjs/common'
import { CreateTagDto } from './dto/create-tag.dto'
import { Tag } from './entities/tag.entity'
import { ITagsRepository, TAGS_REPOSITORY } from './tags.repository.interface'

@Injectable()
export class TagsService {
  constructor(
    @Inject(TAGS_REPOSITORY)
    private readonly tagsRepository: ITagsRepository,
  ) {}

  async create(dto: CreateTagDto): Promise<Tag> {
    const existing = await this.tagsRepository.findByName(dto.name)
    if (existing) {
      throw new ConflictException(`Tag "${dto.name}" already exists`)
    }
    return this.tagsRepository.create(dto)
  }

  findAll(): Promise<Tag[]> {
    return this.tagsRepository.findAll()
  }

  // PostsService এই method কল করে tagIds কে actual Tag entity তে convert করবে
  findByIds(ids: number[]): Promise<Tag[]> {
    return this.tagsRepository.findByIds(ids)
  }
}
