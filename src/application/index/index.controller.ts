import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller('index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {
  }

  @Get('getHello')
  getHello(): string {
    return this.indexService.getHello();
  }
}
