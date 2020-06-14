import { of } from 'rxjs';

// Mock data
export const MockDataResponse = {getValue: (key) => of([ 'cofaxEmail', 'cofaxAdmin', 'cofaxTools', 'cofaxCDS', 'fileServlet' ])};
export const MockDataForService = {value: ['cofaxEmail', 'cofaxAdmin', 'cofaxTools', 'cofaxCDS', 'fileServlet']};
