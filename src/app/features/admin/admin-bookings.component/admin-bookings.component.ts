import { Component, OnInit } from '@angular/core';
import { CommonModule,NgIf, NgFor } from '@angular/common';
import { BookingService, Booking } from '../../../core/services/booking.service';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  loading = true;
  error: string | null = null;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Kunne ikke hente bookinger';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
