import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;

  @IsInt()
  authorId: number;

  @IsInt()
  postId: number;
}
