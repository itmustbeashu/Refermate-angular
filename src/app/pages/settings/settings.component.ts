import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  currentTab: string = 'preferences'; // Active Tab
  constructor(public service: SharedService) { }
  switchTab(tabName: string) {
    this.currentTab = tabName;
  }
}
