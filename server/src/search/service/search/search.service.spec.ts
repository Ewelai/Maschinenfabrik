import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchService],
    }).compile();

    service = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Key isn\'t available"', () => {
    expect(service.getValueByKey('src')).toEqual('Key isn\'t available');
  })

  it('should return value by key from mocked object', () => {
    const result = [ 'cofaxEmail', 'cofaxAdmin', 'cofaxTools', 'cofaxCDS', 'fileServlet' ];
    service.onModuleInit();

    expect(service.getValueByKey('servlet-name')).toEqual(result);
  })
});
