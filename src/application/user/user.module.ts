import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controler';
import { UserService } from './user.service';
import { UserSchema } from '../../models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{name: 'account',schema: UserSchema}],
      'DBBASE_ATFXKY',
    ),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
