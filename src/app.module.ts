import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env একবার লোড হয়ে সব জায়গায় পাওয়া যায়
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig, // DataSource তৈরি হওয়ার আগে env নিশ্চিতভাবে লোড হয়ে যায়
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
    TagsModule,
  ],
})
export class AppModule {}
