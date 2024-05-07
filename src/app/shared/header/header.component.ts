import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  isHomeRoute(): boolean {
    return this.router.url === '/home' || this.router.url === '/login' || this.router.url === '/register' ;
  }
}
