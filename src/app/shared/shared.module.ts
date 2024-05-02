import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        BottomnavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        SidenavComponent,
        BottomnavComponent
    ],
    providers: []
})
export class SharedModule { }
