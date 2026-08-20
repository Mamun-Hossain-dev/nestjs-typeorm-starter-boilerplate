import { Post } from './entities/post.entity'

export const POSTS_REPOSITORY = Symbol('POSTS_REPOSITORY')

export interface IPostsRepository {
  create(data: Partial<Post>): Promise<Post>
  findAll(): Promise<Post[]>
  findById(id: number): Promise<Post | null>
  findByTagName(tagName: string): Promise<Post[]>
}
