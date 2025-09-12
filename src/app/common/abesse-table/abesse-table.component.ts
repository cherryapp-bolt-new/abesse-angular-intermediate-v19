import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { CryptoPipe } from '../../pipe/crypto.pipe';

export interface IAbesseTableColumn {
  key: string;
  title: string;
}

@Component({
  selector: 'abesse-table',
  imports: [NgClass, CryptoPipe],
  templateUrl: './abesse-table.component.html',
  styleUrl: './abesse-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbesseTableComponent<T extends { [k: string]: any; id: number }> {
  dataList = input.required<T[]>();

  columns = input.required<IAbesseTableColumn[]>();

  onEdit = output<T>();

  onDelete = output<T>();

  btnClassSignal = signal('plain');

  btnClass = 'plain';

  searchPhrase = signal<string>('');

  tableClasses = signal({
    'table-sm': true,
    'table-striped': true,
  });

  toggleClass() {
    this.btnClassSignal.update((className) =>
      className === 'plain' ? 'selected' : 'plain'
    );

    this.btnClass = this.btnClass === 'plain' ? 'selected' : 'plain';
  }

  toggleTableClasses(): void {
    this.tableClasses.update((classes) => ({
      ...classes,
      'table-sm': !classes['table-sm'],
    }));
  }

  showDataRow(row: any): void {
    console.log(row);
  }

  myTrigger() {
    console.log('triggered');
  }
}
