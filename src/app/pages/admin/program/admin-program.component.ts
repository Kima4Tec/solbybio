import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { MovieService } from '../../../services/movie.service';
import { HallService } from '../../../services/hall.service';
import { Movie } from '../../../models/movie.model';
import { Hall } from '../../../models/hall.model';
import { Cinema } from '../../../models/cinema.model';
import { CreateShowDto } from '../../../models/createShow.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface CreateMovieDto {
  title: string;
  durationMinutes: number;
  ageLimit: number;
  description?: string;
  directorIds: string[];
}

@Component({
  selector: 'app-admin-program',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-program.component.html',
  styleUrls: ['./admin-program.component.css']
})
export class AdminProgramComponent implements OnInit {
[x: string]: any;
  movies: Movie[] = [];
  halls: Hall[] = [];
  cinemas: Cinema[] = [];
  directors: { id: string; name: string }[] = [];

  // DTO’er til POST
  createMovieDto: CreateMovieDto = {
    title: '',
    durationMinutes: 0,
    ageLimit: 0,
    description: '',
    directorIds: []
  };

  createShowDto: CreateShowDto = {
    movieId: '',
    hallId: '',
    startTime: '',
    price: 0
  };

  selectedCinemaId = '';
  filteredHalls: Hall[] = [];

  constructor(
    private adminService: AdminService,
    private movieService: MovieService,
    private hallService: HallService
  ) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(m => this.movies = m);
    this.hallService.getHalls().subscribe(h => this.halls = h);
    this.adminService.getCinemas().subscribe(c => this.cinemas = c);
    this.adminService.getDirectors().subscribe(d => this.directors = d);
  }

  // Filtrering af sale efter valgt cinema
  onCinemaChange() {
    if (this.selectedCinemaId) {
      this.filteredHalls = this.halls.filter(h => h.cinemaId === this.selectedCinemaId);
      this.createShowDto.hallId = '';
    } else {
      this.filteredHalls = [];
      this.createShowDto.hallId = '';
    }
  }

  // Opret film
  createMovie() {
    this.adminService.createMovie(this.createMovieDto).subscribe(() => {
      alert(`Filmen "${this.createMovieDto.title}" er oprettet!`);

      // Nulstil form
      this.createMovieDto = {
        title: '',
        durationMinutes: 0,
        ageLimit: 0,
        description: '',
        directorIds: []
      };

      // Opdater liste af film
      this.movieService.getMovies().subscribe(m => this.movies = m);
    });
  }

  // Opret forestilling
  createShow() {
    this.adminService.createShow(this.createShowDto).subscribe(() => {
      alert(`Forestilling til filmen ${this.movies.find(m => m.id === this.createShowDto.movieId)?.title} oprettet`);

      // Nulstil form
      this.createShowDto = { movieId: '', hallId: '', startTime: '', price: 0 };
      this.selectedCinemaId = '';
      this.filteredHalls = [];
    });
  }
}
