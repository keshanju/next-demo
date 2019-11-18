import { Test, TestingModule } from '@nestjs/testing';
import { IndexController } from './app.controller';
import { IndexService } from './app.service';

describe('AppController', () => {
  let appController: IndexController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IndexController],
      providers: [IndexService],
    }).compile();

    appController = app.get<IndexController>(IndexController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
