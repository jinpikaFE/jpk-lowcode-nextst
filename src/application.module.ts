import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { TestModule } from './api/test/test.module';

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
    TestModule,
  ],
  controllers: [AppController, BlogController],
  providers: [BlogService],
})
export class AppModule {}
