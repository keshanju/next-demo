import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app';
// import { NestExpressApplication } from '@nestjs/platform-express'; // express应用程序界面

// 异步函数，引导我们的应用程序
async function bootstrap() {// 异步引导
  const app = await NestFactory.create(AppModule); // 使用NestFactory核心类 创建一个nest应用实例

  app.use(bodyParser.json({ limit: '256mb' }));
  app.use(bodyParser.urlencoded({ limit: '256mb', extended: true }));
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
// 应用程序入口文件
bootstrap();
