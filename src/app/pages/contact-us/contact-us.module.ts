import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ContactUsComponent } from "./contact-us.component";

@NgModule({
    declarations: [ContactUsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: ContactUsComponent
        }])
    ]
})

export class ContactUsModule { }