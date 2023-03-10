import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class Comment {
  @IsNotEmpty()
  @IsString()
  by: string;
  @IsOptional()
  @IsString()
  timestamp: string;
  @IsNotEmpty()
  @IsString()
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
  @ValidateNested({ each: true })
  @Type(() => Comment)
  comments: Comment[];
}
