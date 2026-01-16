import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private apiUrl = 'https://localhost:7040/api/customers';

  constructor(private http: HttpClient) {}

  createCustomer(name: string) {
    return this.http.post<{ id: string }>(this.apiUrl, { name });
  }
}

