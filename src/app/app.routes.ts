import { Routes } from '@angular/router';
import { MovieListComponent } from './features/movies/movie-list.component/movie-list.component';
import { ShowListComponent } from './features/shows/show-list.component/show-list.component';
import { BookingCreateComponent } from './features/bookings/booking-create.component/booking-create.component';
import { AdminProgramComponent } from './features/admin/admin-program.component/admin-program.component';
import { AdminLocationsComponent } from './features/admin/admin-location.component/admin-location.component';
import { AdminBookingsComponent } from './features/admin/admin-bookings.component/admin-bookings.component';
import { AdminDirectorsComponent } from './features/admin/admin-directors/admin-directors';

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'shows/:movieId', component: ShowListComponent },
  { path: 'book/:showId', component: BookingCreateComponent },

  { path: 'admin/locations', component: AdminLocationsComponent },
  { path: 'admin/program', component: AdminProgramComponent },
  { path: 'admin/bookings', component: AdminBookingsComponent },
  { path: 'admin/directors', component: AdminDirectorsComponent },

  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
