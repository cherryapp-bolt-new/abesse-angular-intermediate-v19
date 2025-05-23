import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Cinema } from '../model/cinema';

@Injectable({
  providedIn: 'root',
})
export class CinemaService extends BaseService<Cinema> {
  protected override entityName = 'cinema';
}
