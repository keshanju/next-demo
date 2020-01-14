import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { indexSchema } from './../../models/index.schema';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'depositKY', schema: indexSchema }],
      'DBBASE_ATFXKY',
    ),
  ],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
