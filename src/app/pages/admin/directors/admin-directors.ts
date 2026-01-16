import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { Director } from '../../../models/director.model';

@Component({
  selector: 'app-admin-directors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-directors.html',
  styleUrls: ['./admin-directors.css'],
})
export class AdminDirectorsComponent implements OnInit {
  directorName = '';
  directors: Director[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDirectors();
  }

  createDirector() {
    if (!this.directorName.trim()) return;

    this.adminService.createDirector(this.directorName).subscribe(() => {
      alert('Instruktør oprettet');
      this.directorName = '';
      this.loadDirectors();
    });
  }

  private loadDirectors() {
    this.adminService.getDirectors().subscribe((d) => (this.directors = d));
  }
}
