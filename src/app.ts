import { Module } from '@nestjs/common';
import { UserModule } from './application/user/user.module';
import { IndexModule } from './application/index/index.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/member'),
    IndexModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // 应用程序的根模块
}
