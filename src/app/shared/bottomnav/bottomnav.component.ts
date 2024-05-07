import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrl: './bottomnav.component.scss'
})
export class BottomnavComponent {
  constructor(public dialog: MatDialog,private router: Router, private route: ActivatedRoute) { }

  isLinkActive(routePath: string): boolean {
    return this.router.url.includes(routePath);
   }
   
  openCreatePostModal(): void {
    const dialogRef = this.dialog.open(CreatePostModalComponent);
  }
}
