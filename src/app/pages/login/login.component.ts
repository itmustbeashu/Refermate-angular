import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';

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

}



