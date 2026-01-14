import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from '../../models/director.model/director.model';

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

  getDirectors(): Observable<Director[]> {
  return this.http.get<Director[]>('https://localhost:7040/api/directors');
}

  createShow(dto: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/shows`, dto);
  }
}
