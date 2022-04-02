import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller('/views')
export class AppController {
  @Render('home')
  @Get('/home')
  public index(@Query('name') name?: string) {
    return { name };
  }

  @Render('about')
  @Get('/about')
  public about() {
    return {};
  }

  @Render('test')
  @Get('/test')
  public test() {
    return {};
  }
}
