import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() userDto: UserDto) {
    return this.userService.signup(userDto);
  }

  @Post('signin')
  @HttpCode(200)
  signin(@Body() userDto: UserDto) {
    return this.userService.signin(userDto);
  }
}
