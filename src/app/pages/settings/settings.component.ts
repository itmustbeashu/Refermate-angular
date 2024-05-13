import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  currentTab: string = 'preferences'; // Active Tab

  switchTab(tabName: string) {
    this.currentTab = tabName;
  }
}
