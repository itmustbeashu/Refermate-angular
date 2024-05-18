import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(public service: SharedService) { }
  currentTab: string = 'personalInfo'; // Active Tab

  switchTab(tabName: string) {
    this.currentTab = tabName;
  }
}
