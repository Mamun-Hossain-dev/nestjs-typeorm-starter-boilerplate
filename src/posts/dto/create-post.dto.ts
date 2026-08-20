import { IsInt, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsInt()
  authorId: number;

  @IsOptional()
  @IsArray()
  tagIds?: number[];
}
