import {
  Component,
  effect,
  inject,
  input,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CinemaService } from '../../service/cinema.service';
import { Cinema } from '../../model/cinema';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cinema-editor',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './cinema-editor.component.html',
  styleUrl: './cinema-editor.component.css',
})
export class CinemaEditorComponent {
  id = input.required<number>();

  cinemaService = inject(CinemaService);

  router = inject(Router);

  cinema: WritableSignal<Cinema | undefined> = signal<Cinema | undefined>(
    undefined
  );

  httpError: WritableSignal<string | undefined> = signal<string | undefined>(
    undefined
  );

  formGroup = new FormGroup({
    id: new FormControl(0),
    title: new FormControl(''),
    genre: new FormControl(''),
    director: new FormControl(''),
    releaseYear: new FormControl(0),
    poster: new FormControl(''),
    studio: new FormControl(''),
    active: new FormControl(true),
  });

  constructor() {
    effect(() => {
      if (this.id()) {
        this.cinemaService.get(this.id()).subscribe((data) => {
          this.cinema.set(data);
          this.formGroup.patchValue(data);
        });
      }
    });
  }

  async onSubmit() {
    try {
      await firstValueFrom(
        this.cinemaService.update(this.formGroup.value as Cinema)
      );
      this.router.navigate(['']);
    } catch (e) {
      this.httpError.set((e as { message: string }).message);
    }
  }
}
