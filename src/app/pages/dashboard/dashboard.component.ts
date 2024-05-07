import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
@Component({  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(public service: SharedService) { }

}
