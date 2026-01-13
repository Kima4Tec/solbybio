import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinema } from '../../models/cinema.model/cinema.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CinemaService {
  private apiUrl = 'https://localhost:7040/api/cinemas';

  constructor(private http: HttpClient) {}

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.apiUrl);
  }
}
