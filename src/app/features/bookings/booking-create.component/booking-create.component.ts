import { Component } from '@angular/core';
import { Booking } from '../../../models/booking.model/booking.model';
import { BookingService } from '../../../core/services/booking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-create.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-create.component.html',
  styleUrl: './booking-create.component.css',
  providers: [BookingService],
})
export class BookingCreateComponent {
  booking: Booking = {
    showId: '',
    customerId: '',
    numberOfTickets: 1,
  };

  constructor(private bookingService: BookingService) {}

  submit() {
    this.bookingService.createBooking(this.booking).subscribe(() => {
      alert('Booking oprettet');
    });
  }
}
