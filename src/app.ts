import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, LoggerModule, AxiosModule, IncrementModule } from './@nt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './application/user/user.module';
import { IndexModule } from './application/index/index.module';
import { DepositModule } from './application/deposit/deposit.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'DABASE_ATFX',
      useFactory: async (config: ConfigService) => ({
        uri: config.get('BOS_MONGODB_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        poolSize: 100,
        reconnectTries: Number.MAX_VALUE,
      }),
      inject: [ConfigService]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'DBBASE_ATFXKY',
      useFactory: async (config: ConfigService) => ({
        uri: config.get('BOS_MONGODB_KY_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        poolSize: 100,
        reconnectTries: Number.MAX_VALUE,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'DBBASE_ATFXGM',
      useFactory: async (config: ConfigService) => ({
        uri: config.get('BOS_MONGODB_GM_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        poolSize: 100,
        reconnectTries: Number.MAX_VALUE,
        //  dbName: 'atfxgm',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'DBBASE_ATFXUK',
      useFactory: async (config: ConfigService) => ({
        uri: config.get('BOS_MONGODB_UK_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        poolSize: 100,
        reconnectTries: Number.MAX_VALUE,
        //  dbName: 'atfxuk',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'DBBASE_ATFXUAE',
      useFactory: async (config: ConfigService) => ({
        uri: config.get('BOS_MONGODB_UAE_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        poolSize: 100,
        reconnectTries: Number.MAX_VALUE,
        //  dbName: 'atfxuae',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'DBBASE_ATFXMU',
      useFactory: async (config: ConfigService) => ({
        uri: config.get('BOS_MONGODB_MU_URI'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        poolSize: 100,
        reconnectTries: Number.MAX_VALUE,
        //  dbName: 'atfxmu',
      }),
      inject: [ConfigService],
    }),
    // IncrementModule,
    LoggerModule,
    AxiosModule,
    // 以上为全局公共模块，业务模块中无需再单独引入
    IndexModule,
    UserModule,
    DepositModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // 应用程序的根模块
}
