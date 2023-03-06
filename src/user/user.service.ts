import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import UserRepository from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    private userRepo: UserRepository,
  ) {}
  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async signup(userDto) {
    const prevUser = await this.userRepo.get({ email: userDto.email });
    if (prevUser) {
      throw new BadRequestException('Already registered');
    }
    const hash = await this.hashData(userDto.password);
    const user = await this.userRepo.create({
      email: userDto.email,
      password: hash,
    });
    return {
      message: 'Success',
      data: {
        id: user['_id'],
      },
    };
  }

  async signin(userDto) {
    const dbUser = await this.userRepo.get({ email: userDto.email });
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
      message: 'Success',
      data: {
        access_token: this.jwtService.sign({
          email: dbUser.email,
        }),
      },
    };
  }
}
