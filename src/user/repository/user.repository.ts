import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export default class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public getUserObjectId() {
    return String(new mongoose.Types.ObjectId());
  }

  public create(data) {
    return this.userModel.create({ ...data, _id: this.getUserObjectId() });
  }

  public get(query) {
    return this.userModel.findOne({ ...query });
  }
}
