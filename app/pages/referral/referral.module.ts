import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReferralComponent } from "./referral.component";

@NgModule({
    declarations: [ReferralComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: ReferralComponent
        }])
    ]
})

export class ReferralModule { }