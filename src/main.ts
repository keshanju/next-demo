import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';

async function bootstrap() {// 异步引导
  const app = await NestFactory.create(AppModule); // 使用NestFactory核心类 创建一个nest应用实例
  await app.listen(3000);
}
// 应用程序入口文件
bootstrap();
