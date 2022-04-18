import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { TestModule } from './api/test/test.module';
import { BillModule } from './api/bill/bill.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: {
          // useFilesystemPublicRoutes: false,
          redirects: async () => {
            return [
              {
                source: '/',
                destination: '/views/home',
                permanent: false,
              },
            ];
          },
        } as any,
      }),
    ),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'q847164495',
        database: 'next_nest_lowcode_go',
        autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
        synchronize: true, // 实体与表同步 调试模式下开始。不然会有强替换导致数据丢是
      }),
      inject: [],
    }),
    TestModule,
    BillModule,
  ],
  controllers: [AppController, BlogController],
  providers: [BlogService],
})
export class AppModule {}
