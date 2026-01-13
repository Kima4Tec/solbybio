import { Routes } from '@angular/router';
import { MovieListComponent } from './features/movies/movie-list.component/movie-list.component';
import { ShowListComponent } from './features/shows/show-list.component/show-list.component';
import { BookingCreateComponent } from './features/bookings/booking-create.component/booking-create.component';

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'shows/:movieId', component: ShowListComponent },
  { path: 'book', component: BookingCreateComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
