import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';
import { MovieService } from '../../../core/services/movie.service';
import { HallService } from '../../../core/services/hall.service';
import { Hall } from '../../../models/hall.model/hall.model';
import { Movie } from '../../../models/movie.model/movie.model';

@Component({
  selector: 'app-admin-program.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-program.component.html',
  styleUrl: './admin-program.component.css',
})
export class AdminProgramComponent implements OnInit {
  movies: Movie[] = [];
  halls: Hall[] = [];

  movie = {
    title: '',
    durationMinutes: 0,
    ageLimit: 0,
    description: '',
  };

  show = {
    movieId: '',
    hallId: '',
    startTime: '',
    price: 0,
  };

  constructor(
    private adminService: AdminService,
    private movieService: MovieService,
    private hallService: HallService
  ) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((m) => (this.movies = m));
    this.hallService.getHalls().subscribe((h) => (this.halls = h));
  }

  createMovie() {
    this.adminService.createMovie(this.movie).subscribe(() => {
      alert('Film oprettet');
      this.movie = {
        title: '',
        durationMinutes: 0,
        ageLimit: 0,
        description: '',
      };
      this.movieService.getMovies().subscribe((m) => (this.movies = m));
    });
  }

  createShow() {
    this.adminService.createShow(this.show).subscribe(() => {
      alert('Forestilling oprettet');
      this.show = { movieId: '', hallId: '', startTime: '', price: 0 };
    });
  }
}
