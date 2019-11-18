import { Controller, Get, Post, Param, Query, Response, Res, Req, Next, Header, HttpCode, Redirect, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { UserModel } from './user.interface';

@Controller('user')
export class UserController {

  constructor(protected readonly userService: UserService) {
  }

  @Get('getUserInfo1/:uid')
  async getUserInfo1(@Req() request: Request, @Param('uid') params) {
    console.log(params.id);
    return await this.userService.getUserInfo();
  }

  @Get('getUserInfo')
  async getUserInfo(): Promise<UserModel[]> {
    return await this.userService.getUserInfo();
  }

  @Post('updateUserInfo/:uid')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @Redirect('https://www.baid.com/', 302)
  async updateUserInfo(@Param('uid') uid) {
    return await `it will soon update userInfo${uid}!`;
  }
}
