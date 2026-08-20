import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Comment } from './entities/comment.entity'
import { CommentsService } from './comments.service'
import { CommentsRepository } from './comments.repository'
import { CommentsController } from './comments.controller'
import { UsersModule } from '../users/users.module'
import { PostsModule } from '../posts/posts.module'
import { COMMENTS_REPOSITORY } from './comments.repository.interface'

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), UsersModule, PostsModule],
  controllers: [CommentsController],
  providers: [
    CommentsService,
    {
      provide: COMMENTS_REPOSITORY,
      useClass: CommentsRepository,
    },
  ],
})
export class CommentsModule {}
