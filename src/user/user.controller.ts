import { Controller, Get, Post, Param, Res, Req, Body, HttpStatus, Query } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreatUserDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(protected readonly service: UserService) {}

  /**
   * 获取所有用户
   */
  @Get('get')
  getAllUsers(@Req() req: Request, @Res() res: Response, @Query() query, next: NextFunction) {
    return res.send(this.service.getAllUsers());
  }

  /**
   * 查找用户
   */
  @Get('get/:uid')
  public async getUser(@Res() res: Response, @Param() params) {
    console.log(params.uid)
    const uu = await this.service.getUser(params.uid);
    res.status(HttpStatus.OK).json(uu)
  }

  /**
   * 添加用户
   */
  @Post('add')
  async addUser(@Res() res: Response, @Body() creatUserDto: CreatUserDto) {
    const msg = await this.service.addUser(creatUserDto);
        res.status(HttpStatus.CREATED).json(msg);
  }
}
