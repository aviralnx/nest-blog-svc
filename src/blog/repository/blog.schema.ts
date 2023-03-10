import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

interface comment {
  by: string;
  timestamp: string;
  value: string;
}
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
