import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './application.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ logger: console });

  // 日志系统同时解决参数日志打印问题
  app.use(express.json({ limit: '50mb' })); // For parsing application/json
  app.use(express.urlencoded({ extended: true, limit: '50mb' })); // For parsing application/x-www-form-urlencoded

  await app.listen(3000);
}

bootstrap();
