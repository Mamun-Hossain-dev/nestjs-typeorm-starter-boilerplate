import { Injectable, Inject } from '@nestjs/common'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UsersService } from '../users/users.service'
import { PostsService } from '../posts/posts.service'
import { Comment } from './entities/comment.entity'
import {
  ICommentsRepository,
  COMMENTS_REPOSITORY,
} from './comments.repository.interface'

@Injectable()
export class CommentsService {
  constructor(
    @Inject(COMMENTS_REPOSITORY)
    private readonly commentsRepository: ICommentsRepository,
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  async create(dto: CreateCommentDto): Promise<Comment> {
    const author = await this.usersService.findOne(dto.authorId)
    const post = await this.postsService.findOne(dto.postId)

    return this.commentsRepository.create({
      content: dto.content,
      author,
      post,
    })
  }

  findByPost(postId: number): Promise<Comment[]> {
    return this.commentsRepository.findByPostId(postId)
  }
}
