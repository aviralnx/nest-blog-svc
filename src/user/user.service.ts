import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { USERS } from './constants';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}
  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async signup(userDto) {
    if (USERS.findIndex(({ email }) => email === userDto.email) !== -1) {
      throw new BadRequestException('Already registered');
    }
    const hash = await this.hashData(userDto.password);
    USERS.push({
      email: userDto.email,
      password: hash,
    });
    return 'signed up';
  }

  async signin(userDto) {
    const dbUser = USERS.find(({ email }) => userDto.email === email);
    if (!dbUser) {
      throw new ForbiddenException('Invalid Creds');
    }
    const isPasswordMatches = await bcrypt.compare(
      userDto.password,
      dbUser.password,
    );
    if (!isPasswordMatches) {
      throw new ForbiddenException('Invalid Creds');
    }
    return {
      access_token: this.jwtService.sign({
        email: dbUser.email,
      }),
    };
  }
}
