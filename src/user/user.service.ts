import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()

export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  private static user: User[] = [];

  getHello(): string {
    return 'Hello what is your name !';
  }

  async getUserInfo(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
