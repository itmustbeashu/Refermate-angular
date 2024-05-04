import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss']
})
export class CreatePostModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatePostModalComponent>) {}

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
