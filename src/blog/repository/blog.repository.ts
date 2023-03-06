import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export default class BlogRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  public getUserObjectId() {
    return String(new mongoose.Types.ObjectId());
  }

  public create(data) {
    return this.blogModel.create({ ...data, _id: this.getUserObjectId() });
  }

  public getAll(query) {
    return this.blogModel.find({ ...query });
  }
}
