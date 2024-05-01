import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: ProfileComponent
        }])
    ]
})

export class ProfileModule { }