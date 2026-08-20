import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tag } from './entities/tag.entity'
import { TagsService } from './tags.service'
import { TagsRepository } from './tags.repository'
import { TagsController } from './tags.controller'
import { TAGS_REPOSITORY } from './tags.repository.interface'

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagsController],
  providers: [
    TagsService,
    {
      provide: TAGS_REPOSITORY,
      useClass: TagsRepository,
    },
  ],
  exports: [TagsService],
})
export class TagsModule {}
