import { Controller, Get, Post, Param, Query, Response, Res, Req, Next, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { User } from './user.interface';

@Controller('user')
export class UserController {

  constructor(protected readonly userService: UserService) {
  }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('getUserInfo1/:uid')
  async getUserInfo1(@Req() request: Request, @Param('uid') uid) {
    return await this.userService.getUserInfo();
  }

  @Get('getUserInfo')
  async getUserInfo() {
    return await this.userService.getUserInfo();
  }

  @Post('updateUserInfo')
  async updateUserInfo() {
    return await 'it will soon update userInfo!';
  }
}
