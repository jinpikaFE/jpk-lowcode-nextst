import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { logger } from '../../middleware/logger.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule implements NestModule {
  // 使用中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(TestController);
  }
}
