import { Injectable, NotFoundException, Inject } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { UsersService } from '../users/users.service'
import { TagsService } from '../tags/tags.service'
import { Post } from './entities/post.entity'
import {
  IPostsRepository,
  POSTS_REPOSITORY,
} from './posts.repository.interface'

@Injectable()
export class PostsService {
  constructor(
    @Inject(POSTS_REPOSITORY)
    private readonly postsRepository: IPostsRepository,
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {
    // business orchestration: author validate + tags resolve — এইটা business logic, repository এর কাজ না
    const author = await this.usersService.findOne(dto.authorId)
    const tags = await this.tagsService.findByIds(dto.tagIds ?? [])

    return this.postsRepository.create({
      title: dto.title,
      content: dto.content,
      author,
      tags,
    })
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.findAll()
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postsRepository.findById(id)
    if (!post) throw new NotFoundException(`Post ${id} not found`)
    return post
  }

  findByTagName(tagName: string): Promise<Post[]> {
    return this.postsRepository.findByTagName(tagName)
  }
}
