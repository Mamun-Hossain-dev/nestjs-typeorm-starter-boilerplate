import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  // Inverse side — এখানে @JoinTable() বসানো ভুল, শুধু owning side (Post) এ থাকবে
  @ManyToMany(() => Post, (post) => post.tags)
  posts: Post[];
}
