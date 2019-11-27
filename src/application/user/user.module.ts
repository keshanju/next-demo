import { Module } from '@nestjs/common';
import { UserController } from './user.controler';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'user', // 此处的值必须对应于service中的注入model值
      schema: UserSchema, // 每一个表格对应的schema
      collection: 'vipI', // 此处的值对应于数据库中对应的表格名
    },
  ])],
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserService
    }
  ],
})
export class UserModule {

}
