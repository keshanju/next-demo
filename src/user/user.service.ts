import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

export interface Iuer {
  id: number,
  name: string,
  age: number,
  sex: boolean,
  introduction: string
} 

@Injectable()
export class UserService {
  constructor(@InjectModel('User') protected readonly userModel: Model<User>) { };
  private users_mock = [
    { id: 1, name: 'John Doe', age: 18, sex: true, introduction: 'hello' },
    { id: 2, name: 'Alice Caeiro', age: 19, sex: false, introduction: 'hi' },
    { id: 3, name: 'Who Knows', age: 22, sex: true, introduction: 'how are you' },
  ];
  // private static user: User[] = [];

  public async getAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  public async getUser(uid: number) {
    const aa = await this.users_mock.find(uu => {
      uu.id === uid;
    });
    if (!aa) {
      throw new HttpException('User not found', 404);
    }
    return Promise.resolve(aa);
  }

  public addUser(user: Iuer) {
    this.users_mock.push(user);
    return Promise.resolve();
  }
}
