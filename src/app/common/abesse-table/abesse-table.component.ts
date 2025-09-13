import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
  signal,
  computed,
} from '@angular/core';
import { CryptoPipe } from '../../pipe/crypto.pipe';
import { debounceTime, Subject } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface IAbesseTableColumn {
  key: string;
  title: string;
}

@Component({
  selector: 'abesse-table',
  imports: [NgClass, CryptoPipe, ReactiveFormsModule],
  templateUrl: './abesse-table.component.html',
  styleUrl: './abesse-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbesseTableComponent<T extends { [k: string]: any; id: number }>
  implements OnInit
{
  dataList = input.required<T[]>();

  columns = input.required<IAbesseTableColumn[]>();

  onEdit = output<T>();

  onDelete = output<T>();

  btnClassSignal = signal('plain');

  btnClass = 'plain';

  searchPhrase = signal<string>('');

  phraseSubject = new Subject<string>();

  phraseControl = new FormControl('');

  filteredData = computed(() => {
    const data = this.dataList();
    const searchTerm = this.searchPhrase();

    if (!data || !searchTerm || searchTerm.trim() === '') {
      return data || [];
    }

    const term = searchTerm.toLowerCase().trim();
    return data.filter(item =>
      Object.values(item).some(value =>
        value && value.toString().toLowerCase().includes(term)
      )
    );
  });

  tableClasses = signal({
    'table-sm': true,
    'table-striped': true,
  });

  ngOnInit(): void {
    this.phraseControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((phrase) => {
        this.searchPhrase.set(phrase!);
      });
  }

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
