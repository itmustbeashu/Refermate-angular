import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeReferralComponent } from './exchange-referral.component';

describe('ExchangeReferralComponent', () => {
  let component: ExchangeReferralComponent;
  let fixture: ComponentFixture<ExchangeReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeReferralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchangeReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
