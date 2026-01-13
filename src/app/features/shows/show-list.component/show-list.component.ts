import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Show } from '../../../models/show.model/show.model';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from '../../../core/services/show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-list.component',
  imports: [CommonModule],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css',
})
export class ShowListComponent implements OnInit {
  shows$!: Observable<Show[]>;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.shows$ = this.route.paramMap.pipe(
      switchMap((params) =>
        this.showService.getShowsByMovie(params.get('movieId')!)
      )
    );
  }
}
