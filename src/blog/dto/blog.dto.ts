import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export interface comment {
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
  @IsOptional()
  @IsArray()
  comments: [comment];
}
