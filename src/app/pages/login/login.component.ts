import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { CreatePostModalComponent } from '../../shared/create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    console.log("Coming in login")
  }

  openCreatePostModal(): void {
    const dialogRef = this.dialog.open(CreatePostModalComponent, {
      width: '2000px',
    });
  }
}



