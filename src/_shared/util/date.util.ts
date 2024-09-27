import { Locale, TimeZone } from '../model/time-zone.enum';
import { DateModel } from '../model/date.model';

export class DateUtil {

  static splitInArray(date: Date, locale = Locale.ES, timeZone = TimeZone.UTC): string[] {
    const formatter = new Intl.DateTimeFormat(Locale.US, {
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    const [month, day, year] = formatter.format(date).split('/');
    return [year, month, day];
  }

  static byDate(date: Date, locale = Locale.ES, timeZone = TimeZone.UTC): Date {
    const [year, month, day] = DateUtil.splitInArray(date, locale, timeZone);
    return DateUtil.byYearMonthDay(year, Number(month) - 1, day);
  }

  static byYearMonthDay(year: number | string, month: number | string, day: number | string): Date {
    return new Date(Date.UTC(Number(year), Number(month), Number(day), 8, 8, 8));
  }

  static getFirstAndLastDayOfMonth(dateYear: number, dateMonth: number): string[] {
    const date = new DateModel(dateYear, dateMonth, 1);

    const first = DateUtil.byYearMonthDay(date.getYear(), Number(date.getMonth()), 1);
    const last = DateUtil.byYearMonthDay(date.getYear(), Number(date.getMonth()) + 1, 0);

    const f = new DateModel(first);
    const l = new DateModel(last);

    return [f.formated, l.formated];
  }

}
