import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SECRET } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule {}
