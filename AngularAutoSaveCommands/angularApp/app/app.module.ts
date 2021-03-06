import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpRequestsComponent } from './httprequests/httprequests.component';
import { CommandsComponent } from './commands/commands.component';

import { CommandService } from './services/commandService';
import { AboutDataService } from './services/aboutDataService';
import { HomeDataService } from './services/homeDataService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        HttpRequestsComponent,
        CommandsComponent
    ],
    providers: [
        CommandService,
        AboutDataService,
        HomeDataService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule { }
