import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateUtil } from '../_shared/util/date.util';
import { dateMatrix } from '../_shared/model/date.mock';
import { DateModel } from '../_shared/model/date.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  dateMatrix: string[][] = dateMatrix;

  getDate(dateString: string): any {
    const date = new DateModel(dateString);
    const year = Number(date.getYear());
    const month = Number(date.getMonth()) - 1;
    return DateUtil.getFirstAndLastDayOfMonth(year, month);
  }
}
