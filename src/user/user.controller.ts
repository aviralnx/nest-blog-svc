import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() userDto: UserDto) {
    try {
      return this.userService.signup(userDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Post('signin')
  @HttpCode(200)
  signin(@Body() userDto: UserDto) {
    try {
      return this.userService.signin(userDto);
    } catch (err) {
      console.log(err);
    }
  }
}
