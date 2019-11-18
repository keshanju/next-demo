import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { IndexModule } from './index/index.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/member'), IndexModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {

}
