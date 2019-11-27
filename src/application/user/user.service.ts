import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.interface';

@Injectable()

export class UserService {
  constructor(@InjectModel('user') private readonly user: Model<UserModel>) { };

  private readonly userMock: UserModel[] = [];

  async getUserInfo(): Promise<UserModel[]> {
    return await this.user.find().exec();
    // return this.userModel;
  }

  public addUser(user: UserModel) {
    return  this.userMock.push(user);
  }
}
