import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './service/search/search.service';

@Controller('api/search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  findValue(@Query('key') key: string): Array<string> {
    return this.searchService.findValue(key);
  }
}
