import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss']
})
export class CreatePostModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatePostModalComponent>) {}

  editor: Editor = new Editor;
  html = '';
  switchToAI: boolean = false;

  ngOnInit(): void {
    this.editor = new Editor();
  }

  close(): void {
    this.dialogRef.close();
  }

  switchModal() {
    this.switchToAI = !this.switchToAI;
  }

   // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
