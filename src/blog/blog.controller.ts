import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BlogService } from './blog.service';
import { BlogDto } from './dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  createBlogPost(@Body() blogDto: BlogDto, @Req() request) {
    try {
      return this.blogService.createBlogPost({
        ...blogDto,
        owner: request.user?.email,
      });
    } catch (err) {
      console.log(err);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getBlogPosts(@Req() request) {
    try {
      return this.blogService.getBlogPost(request.user?.email);
    } catch (err) {
      console.log(err);
    }
  }
}
