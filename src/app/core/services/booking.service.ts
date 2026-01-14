import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

export interface Booking {
  bookingId: string;
  numberOfTickets: number;
  movieTitle: string;
  showTime: string;
  customerName: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  private apiUrl = 'https://localhost:7040/api/bookings';
  private customerApiUrl = 'https://localhost:7040/api/customers';

  constructor(private http: HttpClient) {}

createBooking(showId: string, customerName: string, tickets: number): Observable<void> {
  // Opret først kunde
  return this.http.post<{ id: string }>(this.customerApiUrl, { Name: customerName }).pipe(
    switchMap(customer =>
      this.http.post<void>(this.apiUrl, {
        showId,
        customerId: customer.id,
        numberOfTickets: tickets
      })
    )
  );
}

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }
}
