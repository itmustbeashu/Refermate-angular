import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrl: './referral.component.scss'
})
export class ReferralComponent {
  constructor(public service: SharedService) { }
}
