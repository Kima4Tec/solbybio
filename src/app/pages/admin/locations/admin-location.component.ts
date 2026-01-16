import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { CinemaService } from '../../../services/cinema.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cinema } from '../../../models/cinema.model';

@Component({
  selector: 'app-admin-location.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-location.component.html',
  styleUrl: './admin-location.component.css',
})
export class AdminLocationsComponent implements OnInit {
  cinemas: Cinema[] = [];

  cinema = {
    name: '',
    city: '',
  };

  hall = {
    cinemaId: '',
    name: '',
    totalSeats: 0,
  };

  constructor(
    private adminService: AdminService,
    private cinemaService: CinemaService
  ) {}

  ngOnInit(): void {
    this.loadCinemas();
  }

  loadCinemas() {
    this.cinemaService.getCinemas().subscribe((c) => (this.cinemas = c));
  }

  createCinema() {
    this.adminService.createCinema(this.cinema).subscribe(() => {
      alert('Biograf oprettet');
      this.cinema = { name: '', city: '' };
      this.loadCinemas();
    });
  }

  createHall() {
    this.adminService.createHall(this.hall).subscribe(() => {
      alert('Sal oprettet');
      this.hall = { cinemaId: '', name: '', totalSeats: 0 };
    });
  }
}
