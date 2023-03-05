import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

interface comment {
  by: string;
  timestamp: string;
  value: string;
}

export class BlogDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsArray()
  @IsOptional()
  comments: [comment];
}
