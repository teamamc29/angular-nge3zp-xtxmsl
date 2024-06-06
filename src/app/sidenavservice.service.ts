import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class SidenavserviceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getSidenavItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(`HTTP Error: ${errorMessage}`, error);
    return throwError(errorMessage);
  }
}