import { Injectable } from '@nestjs/common';
import { BLOGS } from './constants';

@Injectable()
export class BlogService {
  createBlogPost(blogDto) {
    BLOGS.push(blogDto);
    return 'blog created';
  }

  getBlogPost(email) {
    return BLOGS.filter(({ owner }) => owner === email);
  }
}
