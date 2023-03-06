import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BlogService } from './blog.service';
import { BlogDto } from './dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  createBlogPost(@Body() blogDto: BlogDto, @Req() request) {
    return this.blogService.createBlogPost({
      ...blogDto,
      owner: request.user?.email,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @HttpCode(200)
  getBlogPosts(@Req() request) {
    return this.blogService.getBlogPost(request.user?.email);
  }
}
