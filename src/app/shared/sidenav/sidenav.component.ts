import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sidebarCollapsed: boolean = false;
  constructor(public dialog: MatDialog,private router: Router, private route: ActivatedRoute) { }

  isLinkActive(routePath: string): boolean {
   return this.router.url.includes(routePath);
  }
  sidebarCollapse() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  ngOnInit(): void {
    // Call your function here
     
  }

  openCreatePostModal(): void {
    const dialogRef = this.dialog.open(CreatePostModalComponent);
  }
}
