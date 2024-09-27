// test to date.util.ts

import { DateUtil } from './date.util';

describe('DateUtil', () => {
  const testCases = [
    { month: 0, expectResponse: ['2024-01-01', '2024-01-31'] },
    { month: 1, expectResponse: ['2024-02-01', '2024-02-29'] },
    { month: 2, expectResponse: ['2024-03-01', '2024-03-31'] },
    { month: 3, expectResponse: ['2024-04-01', '2024-04-30'] },
    { month: 4, expectResponse: ['2024-05-01', '2024-05-31'] },
    { month: 5, expectResponse: ['2024-06-01', '2024-06-30'] },
    { month: 6, expectResponse: ['2024-07-01', '2024-07-31'] },
    { month: 7, expectResponse: ['2024-08-01', '2024-08-31'] },
    { month: 8, expectResponse: ['2024-09-01', '2024-09-30'] },
    { month: 9, expectResponse: ['2024-10-01', '2024-10-31'] },
    { month: 10, expectResponse: ['2024-11-01', '2024-11-30'] },
    { month: 11, expectResponse: ['2024-12-01', '2024-12-31'] },
  ];

  testCases.forEach(({ month, expectResponse }) => {
    it(`should return first and last day of month ${ month + 1 } of 2024`, () => {
      const dateList = DateUtil.getFirstAndLastDayOfMonth(2024, month);
      expect(dateList).toEqual(expectResponse);
    });
  });

  testCases.forEach(({ month, expectResponse }) => {
    it(`should return date ${ month + 1 } of 2024`, () => {
      const date =  DateUtil.byYearMonthDay(2024, month, 1);

      const dateResponse = DateUtil.byDate(date);
      const [y, m, d] = DateUtil.splitInArray(dateResponse);
      const dateStringToCheck = `${ y }-${ m }-${ d }`;

      expect(dateStringToCheck).toEqual(expectResponse[0]);
    });
  });

});
