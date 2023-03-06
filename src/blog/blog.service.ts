import { Injectable } from '@nestjs/common';
import BlogRepository from './repository/blog.repository';

@Injectable()
export class BlogService {
  constructor(private blogRepo: BlogRepository) {}

  async createBlogPost(blogDto) {
    const createdBlog = await this.blogRepo.create(blogDto);
    return {
      message: 'Success',
      data: {
        createdBlog,
      },
    };
  }

  async getBlogPost(email) {
    const allUserBlogs = await this.blogRepo.getAll({ owner: email });
    return allUserBlogs;
  }
}
