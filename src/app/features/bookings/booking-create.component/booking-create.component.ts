import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../core/services/booking.service';
import { ShowService } from '../../../core/services/show.service';

@Component({
  selector: 'app-booking-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css'],
})
export class BookingCreateComponent {
  showId!: string;
  showTitle!: string;
  customerName = '';
  numberOfTickets = 1;
  confirmed = false;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private showService: ShowService
  ) {
    this.showId = this.route.snapshot.params['showId'];

    // Hent show-info
    this.showService.getShow(this.showId).subscribe({
      next: show => {
        this.showTitle = show.movieTitle;
      },
      error: err => console.error('Kunne ikke hente show:', err),
    });
  }

  submit(form: NgForm) {
    // Marker alle felter som touched
    form.form.markAllAsTouched();

    if (form.invalid) {
      console.warn('Form er ugyldig');
      return;
    }

 this.bookingService
  .createBooking(this.showId, this.customerName, this.numberOfTickets)
  .subscribe({
    next: () => (this.confirmed = true),
    error: err => console.error('Kunne ikke oprette booking:', err),
  });
  }
}
