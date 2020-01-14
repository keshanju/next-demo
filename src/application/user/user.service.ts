import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
export interface User extends Document {
  readonly id: number;
  readonly name: string;
  readonly age: number;
  readonly sex: boolean;
}
@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly user: Model<User>) { };

  async getUserInfo(): Promise<User[]> {
    return await this.user.find().exec();
  }

  public addUserInfo(userDto: User) {
    return  this.user.save(userDto);
  }
}
