import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'referMateV1';
  sideNav!: boolean; // Definite assignment assertion
  layoutConfig: { sideNav: boolean, bottomNav: boolean, footer: boolean } = { sideNav: false, bottomNav: false, footer: false }; // Definite assignment assertion

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Accessing data from activated route
      this.layoutConfig = this.getChildData(this.router.routerState.snapshot.root);
    });
  }

  // Recursive function to traverse the route tree and find the data
  private getChildData(route: ActivatedRouteSnapshot): { sideNav: boolean, bottomNav: boolean, footer: boolean } {
    let sideNav = route.data['sideNav'];
    let bottomNav = route.data['bottomNav'];
    let footer = route.data['footer'];

    if (sideNav !== undefined && bottomNav !== undefined && footer !== undefined) {
      return { sideNav, bottomNav, footer };
    }
    if (route.firstChild) {
      return this.getChildData(route.firstChild);
    }
    return { sideNav: false, bottomNav: false, footer: false };
  }

  get isSideNav(): boolean {
    return this.layoutConfig.sideNav;
  }
  get isBottomNav(): boolean {
    return this.layoutConfig.bottomNav;
  }
  get isFooter(): boolean {
    return this.layoutConfig.footer;
  }
  
}
