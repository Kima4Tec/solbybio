import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private apiUrl = '/api/bookings';

  constructor(private http: HttpClient) {}

  createBooking(booking: Booking): Observable<void> {
    return this.http.post<void>(this.apiUrl, booking);
  }
}
