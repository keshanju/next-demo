import { CreateUserDto } from './create-user.dto';
import { Controller, Get, Post, Param, Query, Res, Req, Session, Headers, Next, Header, HttpCode, Redirect, Body, Delete, Put, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserModel } from './user.interface';


@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { };

  /**
   * 获取全部用户
   * @param query 
   */
  @Get()
  @HttpCode(200)
  private async getUserInfo(@Query() query): Promise<UserModel[]> {
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
  private async getUserInfo1(@Req() req: Request, @Res() res: Response, @Param('uid') uid: string) {
    const data = await this.userService.getUserInfo();
    res.json(data);
  }

  /**
   * 新增用户
   * @param createUserDto 
   */
  @Post()
  @HttpCode(200)
  private async addUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    // return await `it will soon add one user!`;
    this.userService.addUser(createUserDto)
    res.status(HttpStatus.CREATED).send();
  }

  /**
   * 更新
   * @param uid 
   * @param updateCatDto 
   */
  @Put(':uid')
  @HttpCode(200)
  update(@Param('uid') uid: string, @Body() updateCatDto) {
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
