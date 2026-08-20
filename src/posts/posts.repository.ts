import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Post } from './entities/post.entity'
import { IPostsRepository } from './posts.repository.interface'

@Injectable()
export class PostsRepository implements IPostsRepository {
  constructor(
    @InjectRepository(Post)
    private readonly repo: Repository<Post>,
  ) {}

  create(data: Partial<Post>): Promise<Post> {
    const post = this.repo.create(data)
    return this.repo.save(post)
  }

  findAll(): Promise<Post[]> {
    return this.repo.find({
      relations: { author: true, tags: true },
    })
  }

  findById(id: number): Promise<Post | null> {
    return this.repo.findOne({
      where: { id },
      relations: { author: true, tags: true, comments: { author: true } },
    })
  }

  // QueryBuilder logic এখন repository তে কেন্দ্রীভূত — Service জানেই না এটা কীভাবে হয়
  findByTagName(tagName: string): Promise<Post[]> {
    return this.repo
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .leftJoinAndSelect('post.tags', 'tag')
      .where('tag.name = :tagName', { tagName })
      .getMany()
  }
}
