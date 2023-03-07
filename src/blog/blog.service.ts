import { Injectable } from '@nestjs/common';
import BlogRepository from './repository/blog.repository';

@Injectable()
export class BlogService {
  constructor(private blogRepo: BlogRepository) {}

  async createBlogPost(blogDto) {
    try {
      const createdBlog = await this.blogRepo.create(blogDto);
      return {
        message: 'Success',
        data: {
          createdBlog,
        },
      };
    } catch (err) {
      console.log('*****createBlogPost Service*****', err);
    }
  }

  async getBlogPost(email) {
    try {
      const allUserBlogs = await this.blogRepo.getAll({ owner: email });
      return allUserBlogs;
    } catch (err) {
      console.log('*****getBlogPost Service*****', err);
    }
  }
}
