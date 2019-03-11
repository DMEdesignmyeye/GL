import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { ImageUploadModule } from '../shared/image-upload/image-upload.module';
// import { NgbdModalBasic } from './teams/teams.component';
import { ExamplesComponent } from './examples.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DiscoverComponent } from './discover/discover.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { TwitterComponent } from './twitter/twitter.component';
import { Page404Component } from './page404/page404.component';
import { Page422Component } from './page422/page422.component';
import { Page500Component } from './page500/page500.component';
import { Area2Component } from './area2/area2.component';
import { Area1Component } from './area1/area1.component';
import { Area3Component } from './area3/area3.component';
import { Area4Component } from './area4/area4.component';
import { Area5Component } from './area5/area5.component';
import { Area6Component } from './area6/area6.component';
import { Area7Component } from './area7/area7.component';
import { Area8Component } from './area8/area8.component';
import { Area9Component } from './area9/area9.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        AngularMultiSelectModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'
        }),
        ImageUploadModule
    ],
    
    declarations: [
        ExamplesComponent,
        AboutusComponent,
        AddproductComponent,
        BlogpostComponent,
        BlogpostsComponent,
        ContactusComponent,
        DiscoverComponent,
        EcommerceComponent,
        LandingComponent,
        LoginComponent,
        ProductpageComponent,
        ProfileComponent,
        RegisterComponent,
        SearchComponent,
        SettingsComponent,
        TwitterComponent,
        Page404Component,
        Page422Component,
        Page500Component,
        Area2Component,
        Area1Component,
        Area3Component,
        Area4Component,
        Area5Component,
        Area6Component,
        Area7Component,
        Area8Component,
        Area9Component,
        TeamsComponent,
        // NgbdModalBasic
        //ContactusComponent,
    ]
})
export class ExamplesModule { }
