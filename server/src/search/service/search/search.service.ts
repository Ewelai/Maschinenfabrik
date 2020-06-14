import { Injectable } from '@nestjs/common';
import { MockedData } from '../../mocked/MockedData';
import { walkTree, returnValue } from '../../utilites/search.utilites';

@Injectable()
export class SearchService {
  private mockedData = MockedData;

  onModuleInit(): void {
    walkTree(this.mockedData);
  }

  /**
   * Find a value by key
   * 
   * @param  {string} key
   * @returns Array
   */

  public getValueByKey(key: string): Array<string> {
    return returnValue(key);
  }
}
