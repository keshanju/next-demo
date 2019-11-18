import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller('index')
export class IndexController {
  constructor(private readonly appService: IndexService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
