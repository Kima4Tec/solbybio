import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../core/services/movie.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies$!: Observable<any[]>;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }

  goToShows(movieId: string) {
    this.router.navigate(['/shows', movieId]);
  }
}
