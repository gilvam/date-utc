import { DateUtil } from '../util/date.util';

export class DateModel {
  private year: string;
  private month: string;
  private day: string;

  constructor(date: Date);
  constructor(date: string);
  constructor(year: string | number, month: string | number, day: string | number);
  constructor(param1: Date | string | number, param2: string | number = '', param3: string | number = '') {
    if (param1 instanceof Date) {
      [this.year, this.month, this.day] = DateUtil.splitInArray(param1);
      return;
    }

    if (typeof param1 === 'string' && param1.split('-').length) {
      [this.year, this.month, this.day] = param1.split('-');
      return;
    }

    this.year = this.padStart(param1);
    this.month = this.padStart(param2);
    this.day = this.padStart(param3);
  }

  private padStart(value: string | number): string {
    return String(value).padStart(2, '0');
  }

  get formated(): string {
    return `${ this.year }-${ this.month }-${ this.day }`;
  }

  get date(): Date {
    return DateUtil.byYearMonthDay(this.year, Number(this.month) - 1, this.day);
  }

  getYear(): string {
    return this.year;
  }

  getMonth(): string {
    return this.month;
  }

  getDay(): string {
    return this.day;
  }
}
