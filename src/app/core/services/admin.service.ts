import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private baseUrl = 'https://localhost:7040/api';

  constructor(private http: HttpClient) {}

  createCinema(dto: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/cinemas`, dto);
  }

  createHall(dto: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/halls`, dto);
  }

  createMovie(dto: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/movies`, dto);
  }

  createShow(dto: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/shows`, dto);
  }
}
