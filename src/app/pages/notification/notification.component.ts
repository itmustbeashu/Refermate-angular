import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  constructor(public service: SharedService) { }

}
