import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { NgxEditorModule } from 'ngx-editor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        BottomnavComponent,
        CreatePostModalComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxEditorModule,
        NgMultiSelectDropDownModule,
    
    ],
    exports: [
        RouterModule,
        HeaderComponent,
        SidenavComponent,
        BottomnavComponent,
        CreatePostModalComponent,
    ],
    providers: []
})
export class SharedModule { 
 
}
