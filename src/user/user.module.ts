import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { SECRET } from './constants';
import UserRepository from './repository/user.repository';
import { User, UserSchema } from './repository/user.schema';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, UserRepository],
})
export class UserModule {}
