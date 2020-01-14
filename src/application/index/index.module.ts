import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { indexSchema } from './../../models/index.schema';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Index', schema: indexSchema }
  ], 'DBBASE_TEST')],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule { }