import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  currentTab: string = 'personalInfo'; // Active Tab

  switchTab(tabName: string) {
    this.currentTab = tabName;
  }
}
