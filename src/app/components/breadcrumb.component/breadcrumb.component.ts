import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="breadcrumb" *ngIf="breadcrumbs.length">
      <ng-container *ngFor="let bc of breadcrumbs; let last = last">
        <ng-container *ngIf="last">
          <a [routerLink]="bc.url">{{bc.label}}</a> 
        </ng-container>
        <ng-container *ngIf="!last">
          <span class="parent">{{bc.label}}/</span>
        </ng-container>
      </ng-container>
    </nav>
  `,
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.route.root);
      this.cd.detectChanges(); // tving Angular til at opdatere view
      console.log('Breadcrumbs:', this.breadcrumbs);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
    const children = route.children;

    for (const child of children) {
      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      const nextUrl = routeURL ? `${url}/${routeURL}` : url;

      if (child.snapshot.data['breadcrumb']) {
        breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: nextUrl });
      }

      this.createBreadcrumbs(child, nextUrl, breadcrumbs);
    }

    return breadcrumbs;
  }
}
