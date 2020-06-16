import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './service/search/search.service';

@Controller('api/search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  /**
   * GET request with key query to take value
   * 
   * @param  {string} key
   * @returns Array
   */

  @Get()
  takeValue(@Query('key') key: string): Array<string> {
    return this.searchService.getValueByKey(key);
  }
}
