import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule} from 'ng6-toastr-notifications';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDN2KKTgPz1bSMZp_keZNV6Sc9ns8d1QWA'
        }),
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule,
        BrowserModule,
        HttpClientModule,
        ToastrModule.forRoot()
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
