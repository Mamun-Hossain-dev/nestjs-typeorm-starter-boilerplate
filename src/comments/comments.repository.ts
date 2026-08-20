import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Comment } from './entities/comment.entity'
import { ICommentsRepository } from './comments.repository.interface'

@Injectable()
export class CommentsRepository implements ICommentsRepository {
  constructor(
    @InjectRepository(Comment)
    private readonly repo: Repository<Comment>,
  ) {}

  create(data: Partial<Comment>): Promise<Comment> {
    const comment = this.repo.create(data)
    return this.repo.save(comment)
  }

  findByPostId(postId: number): Promise<Comment[]> {
    return this.repo.find({
      where: {
        post: {
          id: postId,
        } as any,
      },
      relations: {
        author: true,
      } as any,
    })
  }
}
