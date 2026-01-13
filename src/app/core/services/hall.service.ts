import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hall } from '../../models/hall.model/hall.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HallService {
  private apiUrl = 'https://localhost:7040/api/halls';

  constructor(private http: HttpClient) {}

  getHalls(): Observable<Hall[]> {
    return this.http.get<Hall[]>(this.apiUrl);
  }
}
