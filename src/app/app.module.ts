import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { InvetoryComponent } from './pages/invetory/invetory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent,
    InvetoryComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
