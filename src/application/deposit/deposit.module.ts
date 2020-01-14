import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';
import { DepositSchema } from '../../models/deposit.schema';
@Module({
  imports: [
    MongooseModule.forFeature(
      [{name: 'depositKY',schema: DepositSchema}],
      'DBBASE_ATFXKY',
    ),
  ],
  controllers: [DepositController],
  providers: [DepositService],
})
export class DepositModule {}
