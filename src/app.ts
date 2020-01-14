import { Module } from '@nestjs/common';
import { UserModule } from './application/user/user.module';
import { IndexModule } from './application/index/index.module';
import { ConfigModule, ConfigService, LoggerModule, AxiosModule, IncrementModule } from './@nt';

import { MongooseModule } from '@nestjs/mongoose';

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
    IncrementModule,
    LoggerModule,
    AxiosModule,
    // 以上为全局公共模块，业务模块中无需再单独引入
    IndexModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // 应用程序的根模块
}
