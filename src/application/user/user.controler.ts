import { Controller, Get, Post, Param, Query, Res, Req, Session, Headers, Next, Header, HttpCode, Redirect, Body, Delete, Put, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { CreateUserDto } from './createUser.dto';
@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { };

  /**
   * 获取全部用户
   * @param query 
   */
  @Get()
  @HttpCode(200)
  private async getUserInfo(@Query() query, @Req() request: Request) {
    return await this.userService.getUserInfo();
  }

  /**
   * 根据ID查找用户
   * @param req 
   * @param res 
   * @param uid 
   */
  @Get(':uid')
  @HttpCode(200)
  private async getUserInfo1(@Req() request: Request, @Res() response: Response, @Param('uid') uid: string) {
    console.log("request:>>>>>>>" + request)
    const data = await this.userService.getUserInfo();
    response.json(data);
  }

  /**
   * 新增用户
   * @param createUserDto 
   */
  @Post()
  @HttpCode(200)
  private async addUser(@Body() body: CreateUserDto, @Res() res: Response, @Session() session) {
    console.log(session);
    // return await `it will soon add one user!`;
    this.userService.addUserInfo(body)
    res.status(HttpStatus.CREATED).send();
  }

  /**
   * 更新
   * @param uid 
   * @param body 
   */
  @Put(':uid')
  @HttpCode(200)
  update(@Param('uid') uid: string, @Body() body) {
    return `This action updates a #${uid} user`;
  }

  /**
   * 删除
   * @param uid 
   */
  @Delete(':uid')
  @HttpCode(200)
  private async deleteUser(@Param('uid') uid: string) {
    return `This action removes a #${uid} user`;
  }
}
