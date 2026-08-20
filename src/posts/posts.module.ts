import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Post } from './entities/post.entity'
import { PostsService } from './posts.service'
import { PostsRepository } from './posts.repository'
import { PostsController } from './posts.controller'
import { UsersModule } from '../users/users.module'
import { TagsModule } from '../tags/tags.module'
import { POSTS_REPOSITORY } from './posts.repository.interface'

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UsersModule, TagsModule],
  controllers: [PostsController],
  providers: [
    PostsService,
    {
      provide: POSTS_REPOSITORY,
      useClass: PostsRepository,
    },
  ],
  exports: [PostsService],
})
export class PostsModule {}
