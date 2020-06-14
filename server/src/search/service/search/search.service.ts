import { Injectable } from '@nestjs/common';
import { MockedData } from '../../mocked/MockedData';
import { walkTree, getKey } from '../../utilites/search.utilites';
// import { SearchData } from '../../model/search.model';

@Injectable()
export class SearchService {
  private mockedData: object = MockedData;

  onModuleInit() {
    walkTree(this.mockedData);
  }

  public findValue(searchKey: string): Array<string> {
    return getKey(searchKey);
  }
}
