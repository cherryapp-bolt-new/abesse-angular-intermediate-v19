import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

// Simple cache storage
const responseCache = new Map<string, any>();

export const joeInterceptor: HttpInterceptorFn = (req, next) => {
  // Only cache GET requests
  if (req.method === 'GET') {
    const cacheKey = req.urlWithParams;

    // Check if response is cached
    if (responseCache.has(cacheKey)) {
      console.log('Serving from cache:', cacheKey);
      return of(responseCache.get(cacheKey));
    }
  }

  let newRequest = req.clone({
    headers: req.headers.append(
      'x-joe',
      'x-key-lksadjkfélasdjflésajdkfléksadjéflkjadséfjéds'
    ),
  });

  return next(newRequest).pipe(
    // Cache the response if it's a GET request
    filter((x) => x instanceof HttpResponse),
    tap((response) => {
      if (req.method === 'GET') {
        const cacheKey = req.urlWithParams;
        responseCache.set(cacheKey, response);
        console.log('Cached response for:', cacheKey);
      }
    }),
    catchError((error) => {
      console.error(error);
      return of(error);
    })
  );
};
