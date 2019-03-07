import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { AddproductComponent } from './examples/addproduct/addproduct.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { DiscoverComponent } from './examples/discover/discover.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { SearchComponent } from './examples/search/search.component';
import { SettingsComponent } from './examples/settings/settings.component';
import { TwitterComponent } from './examples/twitter/twitter.component';
import { Page404Component } from './examples/page404/page404.component';
import { Page422Component } from './examples/page422/page422.component';
import { Page500Component } from './examples/page500/page500.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { Area1Component } from './examples/area1/area1.component';
import { Area2Component } from './examples/area2/area2.component';
import { Area3Component } from './examples/area3/area3.component';
import { Area4Component } from './examples/area4/area4.component';
import { Area5Component } from './examples/area5/area5.component';
import { Area6Component } from './examples/area6/area6.component';
import { Area7Component } from './examples/area7/area7.component';
import { Area8Component } from './examples/area8/area8.component';
import { Area9Component } from './examples/area9/area9.component';
import { TeamsComponent } from './examples/teams/teams.component';

const routes: Routes =[
    
    { path: 'presentation',         component: PresentationComponent },
    { path: 'components',           component: ComponentsComponent },
    { path: 'sections',             component: SectionsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/aboutus',     component: AboutusComponent },
    { path: 'examples/addproduct',  component: AddproductComponent },
    { path: 'examples/blogpost',    component: BlogpostComponent },
    { path: 'examples/blogposts',   component: BlogpostsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/discover',    component: DiscoverComponent },
    { path: 'examples/ecommerce',   component: EcommerceComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/register',    component: RegisterComponent },
    { path: 'examples/search',      component: SearchComponent },
    { path: 'examples/settings',    component: SettingsComponent },
    { path: 'examples/twitter',     component: TwitterComponent },
    { path: 'examples/page404',     component: Page404Component },
    { path: 'examples/page422',     component: Page422Component },
    { path: 'examples/page500',     component: Page500Component },
    { path: 'examples/area2',       component: Area2Component     },
    { path: 'examples/area1',       component: Area1Component     },
    { path: 'examples/area3',       component: Area3Component     },
    { path: 'examples/area4',       component: Area4Component     },
    { path: 'examples/area5',       component: Area5Component     },
    { path: 'examples/area6',       component: Area6Component     },
    { path: 'examples/area7',       component: Area7Component     },
    { path: 'examples/area8',       component: Area8Component     },
    { path: 'examples/area9',       component: Area9Component     },
    { path: 'examples/teams',       component: TeamsComponent     },
    { path: '', redirectTo: 'presentation', pathMatch: 'full' }
    
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
