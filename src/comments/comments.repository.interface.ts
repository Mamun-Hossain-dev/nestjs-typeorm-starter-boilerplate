import { Comment } from './entities/comment.entity'

export const COMMENTS_REPOSITORY = Symbol('COMMENTS_REPOSITORY')

export interface ICommentsRepository {
  create(data: Partial<Comment>): Promise<Comment>
  findByPostId(postId: number): Promise<Comment[]>
}
