import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { Session } from 'express-session';


// @Session()
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'User', schema: UserSchema, collection: 'user'},
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
