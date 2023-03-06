import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { comment } from '../dto';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  id: string;

  @Prop({ isRequired: true })
  title: string;

  @Prop({ isRequired: true })
  description: string;

  @Prop()
  comments: [comment];

  @Prop()
  owner: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
