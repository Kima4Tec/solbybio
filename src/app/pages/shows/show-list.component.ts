import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../../models/show.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ShowService } from './../../services/show.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ShowService],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  shows$!: Observable<Show[]>;
  movieTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId')!;

    this.shows$ = this.showService.getShowsByMovie(movieId).pipe(
      map((shows) => {
        if (shows.length > 0) {
          this.movieTitle = shows[0].movieTitle;
        }
        return shows;
      })
    );
  }
}
