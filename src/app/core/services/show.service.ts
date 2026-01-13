import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../../models/show.model/show.model';

@Injectable({ providedIn: 'root' })
export class ShowService {
  private apiUrl = '/api/shows';

  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  getShowsByMovie(movieId: string): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiUrl}?movieId=${movieId}`);
  }
}
