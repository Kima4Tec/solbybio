import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../components/breadcrumb.component/breadcrumb.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BreadcrumbComponent],
  template: `
    <div class="admin-page">
      <app-breadcrumb></app-breadcrumb>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AdminComponent {}
