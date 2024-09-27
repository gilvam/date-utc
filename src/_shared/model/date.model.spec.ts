import { beforeEach } from 'node:test';
import { DateModel } from './date.model';
import { DateUtil } from '../util/date.util';
import { dateMatrix } from './date.mock';

describe('DateModel', () => {
  let dateM: string[][] = dateMatrix;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  dateM.flat().forEach((date) => {
    it(`should date check string ${ date }`, () => {
      const [year, month, day] = date.split('-').map(it => Number(it));
      const [yearResponse, monthResponse, dayResponse] = date.split('-');
      const dateStringToCheck = `${ yearResponse }-${ monthResponse }-${ dayResponse }`;
      const dateToCheck = DateUtil.byYearMonthDay(year, month - 1, day);
      const spy = jest.spyOn(DateUtil, 'splitInArray');

      const dateModel = new DateModel(dateToCheck);

      expect((dateModel as any).year).toBe(yearResponse);
      expect((dateModel as any).month).toBe(monthResponse);
      expect((dateModel as any).day).toBe(dayResponse);
      expect((dateModel).formated).toBe(dateStringToCheck);
      expect(spy).toHaveBeenCalled();
    });
  });

  dateM.flat().forEach((date) => {
    it(`should create a from YYYY-MM-DD string ${ date }`, () => {
      const [yearResponse, monthResponse, dayResponse] = date.split('-');
      const dateStringToCheck = `${ yearResponse }-${ monthResponse }-${ dayResponse }`;
      const spy = jest.spyOn(DateUtil, 'splitInArray');

      const dateModel = new DateModel(date);

      expect((dateModel).formated).toBe(dateStringToCheck);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  dateM.flat().forEach((date) => {
    it(`should create a from year, month, and day strings ${ date }`, () => {
      const [year, month, day] = date.split('-').map(it => Number(it));
      const [yearResponse, monthResponse, dayResponse] = date.split('-');
      const dateStringToCheck = `${ yearResponse }-${ monthResponse }-${ dayResponse }`;
      const spy = jest.spyOn(DateUtil, 'splitInArray');

      const dateModel = new DateModel(year, month, day);

      expect((dateModel as any).year).toBe(yearResponse);
      expect((dateModel as any).month).toBe(monthResponse);
      expect((dateModel as any).day).toBe(dayResponse);
      expect((dateModel).formated).toBe(dateStringToCheck);
      expect(spy).not.toHaveBeenCalled();
    });
  });

});
