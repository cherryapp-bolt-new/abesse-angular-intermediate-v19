import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T extends { id: number }> {
  http = inject(HttpClient);

  apiUrl = 'https://nettuts.hu/jms/cherryApp/';

  protected entityName: string = '';

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl + this.entityName);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(this.apiUrl + this.entityName + '/' + id);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      this.apiUrl + this.entityName + '/' + entity.id,
      entity
    );
  }
}
