import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './service/search/search.service';

@Module({
  imports: [],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
