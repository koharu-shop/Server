import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  getHello(): string {
    return 'hi';
  }
}
