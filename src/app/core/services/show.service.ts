import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../../models/show.model/show.model';

@Injectable({ providedIn: 'root' })
export class ShowService {
  private apiUrl = 'https://localhost:7040/api/shows';

  constructor(private http: HttpClient) {}

  // Hent alle shows (hvis du får brug for det)
  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  // Hent shows for en bestemt film
  getShowsByMovie(movieId: string): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiUrl}/movie/${movieId}`);
  }
}
