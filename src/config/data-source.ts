import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { Tag } from '../tags/entities/tag.entity';

dotenv.config();

// এটা শুধু CLI migration কমান্ডের জন্য — NestJS app runtime এর সাথে এর কোনো সম্পর্ক নেই
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Post, Comment, Tag],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
