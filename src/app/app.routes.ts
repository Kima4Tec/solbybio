import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { AdminProgramComponent } from './pages/admin/program/admin-program.component';
import { AdminLocationsComponent } from './pages/admin/locations/admin-location.component';
import { AdminBookingsComponent } from './pages/admin/bookings/admin-bookings.component';
import { AdminDirectorsComponent } from './pages/admin/directors/admin-directors';
import { MovieListComponent } from './pages/movies/movie-list.component';
import { ShowListComponent } from './pages/shows/show-list.component';
import { BookingCreateComponent } from './pages/bookings/booking-create.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'shows/:movieId', component: ShowListComponent },
  { path: 'book/:showId', component: BookingCreateComponent },
  {
    path: 'admin',
    component: AdminComponent,
    data: { breadcrumb: 'Admin' }, // parent breadcrumb
    children: [
      { path: 'program', component: AdminProgramComponent, data: { breadcrumb: 'Film & program' } },
      { path: 'locations', component: AdminLocationsComponent, data: { breadcrumb: 'Lokationer' } },
      { path: 'bookings', component: AdminBookingsComponent, data: { breadcrumb: 'Bookinger' } },
      { path: 'directors', component: AdminDirectorsComponent, data: { breadcrumb: 'Instruktører' } }
    ]
  },
  { path: '', redirectTo: '/admin/program', pathMatch: 'full' }
];
