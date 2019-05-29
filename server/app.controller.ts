import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ViewData } from './app.interface';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  root(): ViewData {
    return { app: 'public' }
  }

  @Get('live')
  @Render('index')
  streamingClient(): ViewData {
    return { app: 'client' }
  }

  @Get('present')
  @Render('index')
  presenter(): ViewData {
    return { app: 'presenter' }
  }

  @Get('dashboard')
  @Render('index')
  dashboard(): ViewData {
    return { app: 'dashboard' }
  }
}
