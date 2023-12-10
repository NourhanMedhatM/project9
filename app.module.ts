import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HosinglocationComponent } from './hosinglocation/hosinglocation.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HosinglocationComponent,
        DetailsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent
    ]
})
export class AppModule { }
