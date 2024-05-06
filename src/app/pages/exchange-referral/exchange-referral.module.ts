import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ExchangeReferralComponent } from "./exchange-referral.component";

@NgModule({
    declarations: [ExchangeReferralComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: ExchangeReferralComponent
        }])
    ]
})

export class HomeModule { }