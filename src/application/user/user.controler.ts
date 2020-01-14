import { PureController } from './../../@nt/controllers/PureController';
import { Controller, Get, Post, Param, Query, Res, Req, Session, Headers, Next, Header, HttpCode, Redirect, Body, Delete, Put, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { CreateUserDto } from './createUser.dto';
import { HttpStatusCode } from 'src/@nt/controllers/CodeController';
@Controller('user')
export class UserController extends PureController {

  constructor(protected readonly service: UserService) { super(service) };

  /**
   * demo演示
   * 获取全部用户
   * @param query 
   */
  @Get()
  @HttpCode(200)
  protected async getUserInfo(@Query() query, @Req() request: Request) {
    try {
      const res = await this.service.getUserInfo()
      return this.backData(HttpStatusCode.DATA_QUERY_SUCCESS, res);
    } catch (error) {
      return this.backData(HttpStatusCode.DATA_QUERY_FAILED, error);
    }
  }

  /**
   * 根据ID查找用户
   * @param req 
   * @param res 
   * @param uid 
   */
  @Get(':uid')
  @HttpCode(200)
  protected async getUserInfo1(@Req() request: Request, @Res() response: Response, @Param('uid') uid: string) {
    const data = await this.service.getUserInfo();
    response.json(data);
  }

  /**
   * 新增用户
   * @param createUserDto 
   */
  @Post()
  @HttpCode(200)
  protected async addUser(@Body() body: CreateUserDto, @Res() res: Response, @Session() session) {
    console.log(session);
    // return await `it will soon add one user!`;
    this.service.addUserInfo(body)
    res.status(HttpStatus.CREATED).send();
  }

  /**
   * 更新
   * @param uid 
   * @param body 
   */
  @Put(':uid')
  @HttpCode(200)
  protected update(@Param('uid') uid: string, @Body() body) {
    return `This action updates a #${uid} user`;
  }

  /**
   * 删除
   * @param uid 
   */
  @Delete(':uid')
  @HttpCode(200)
  protected async deleteUser(@Param('uid') uid: string) {
    return `This action removes a #${uid} user`;
  }
}
