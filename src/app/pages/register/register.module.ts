import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: RegisterComponent
        }])
    ]
})

export class RegisterModule { }