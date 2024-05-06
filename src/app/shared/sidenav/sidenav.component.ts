import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sidebarCollapsed: boolean = false;
  constructor(public dialog: MatDialog,private router: Router, private route: ActivatedRoute,public service: SharedService) { }

  isLinkActive(routePath: string): boolean {
   return this.router.url.includes(routePath);
  }
  sidebarCollapse() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.service.isSideMenuCollapsed = true; 
  }
 
  openCreatePostModal(): void {
    const dialogRef = this.dialog.open(CreatePostModalComponent);
  }
}
