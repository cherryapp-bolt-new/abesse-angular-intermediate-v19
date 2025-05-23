import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  AbesseTableComponent,
  IAbesseTableColumn,
} from './common/abesse-table/abesse-table.component';
import { CinemaService } from './service/cinema.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Cinema } from './model/cinema';

@Component({
  selector: 'app-root',
  imports: [BaseChartDirective, FormsModule, AbesseTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cinemaService = inject(CinemaService);

  cinemaListSignal = toSignal(this.cinemaService.getAll());

  cinemaColumns = Object.keys(new Cinema()).map((key) => ({
    key,
    title: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  title = 'Abesse Dashboard';

  time = '';

  timeSignal = signal('');

  btnClassSignal = signal('plain');

  btnClass = 'plain';

  searchPhrase = 'banana in the box';

  searchPhraseSignal = signal<string>('monkey');

  isTimeShowSignal = signal(false);

  randomDataList: {
    id: number;
    title: string;
    price: number;
    model: string;
  }[] = [
    { id: 1, title: 'Title1', price: 42, model: 'Ford Capri' },
    { id: 2, title: 'Title2', price: 42, model: 'Ford Capri' },
    { id: 3, title: 'Title3', price: 42, model: 'Ford Capri' },
    { id: 4, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 5, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 6, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 7, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 8, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 9, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 10, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 11, title: 'Title', price: 42, model: 'Ford Capri' },
    { id: 12, title: 'Title', price: 42, model: 'Ford Capri' },
  ];

  columns: IAbesseTableColumn[] = [
    { key: 'id', title: '#' },
    { key: 'title', title: 'Title' },
    { key: 'price', title: 'Price' },
    { key: 'model', title: 'Model' },
  ];

  tableClasses = signal({
    'table-sm': true,
    'table-striped': true,
  });

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };

  public lineChartLegend = true;

  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
      this.timeSignal.set(this.time);
    }, 1000);
  }

  toggleClass() {
    this.btnClassSignal.update((className) =>
      className === 'plain' ? 'selected' : 'plain'
    );

    this.btnClass = this.btnClass === 'plain' ? 'selected' : 'plain';
  }

  toggleTimer() {
    this.isTimeShowSignal.update((v) => !v);
  }

  showDataRow(row: any): void {
    console.log(row);
  }

  toggleTableClasses(): void {
    this.tableClasses.update((classes) => ({
      ...classes,
      'table-sm': !classes['table-sm'],
    }));
  }
}
