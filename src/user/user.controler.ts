import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {

  constructor(protected readonly userService: UserService) {
  }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('/getUserInfo')
  async getUserInfo() {
    return await this.userService.getUserInfo();
  }
}
