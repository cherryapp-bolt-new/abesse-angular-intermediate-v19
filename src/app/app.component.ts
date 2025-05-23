import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  imports: [BaseChartDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Abesse Dashboard';

  time = '';

  timeSignal = signal('');

  btnClassSignal = signal('plain');

  btnClass = 'plain';

  searchPhrase = 'banana in the box';

  searchPhraseSignal = signal<string>('monkey');

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
}
