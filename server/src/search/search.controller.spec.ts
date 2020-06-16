import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchService } from './service/search/search.service';

describe('Search Controller', () => {
  let controller: SearchController;
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchService]
    }).compile();

    service = module.get<SearchService>(SearchService);
    controller = module.get<SearchController>(SearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return value by key', () => {
    const result = [ 'cofaxEmail', 'cofaxAdmin', 'cofaxTools', 'cofaxCDS', 'fileServlet' ];

    jest.spyOn(service, 'getValueByKey').mockImplementation(() => result);
    expect(controller.takeValue('servlet-name')).toBe(result);
  });
});
