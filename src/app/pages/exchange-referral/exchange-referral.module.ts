import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ExchangeReferralComponent } from "./exchange-referral.component";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
    declarations: [ExchangeReferralComponent],
    imports: [
        CommonModule,
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forChild([{
            path: '',
            component: ExchangeReferralComponent
        }])
    ]
})

export class ExchangeReferralModule { }