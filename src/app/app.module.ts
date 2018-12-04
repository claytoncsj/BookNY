import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { OptionComponent } from './option/option.component';
import { TitleComponent } from './title/title.component';
import { TodayComponent } from './today/today.component';
import { BoxoptionComponent } from './boxoption/boxoption.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { OnfooterComponent } from './onfooter/onfooter.component';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    OptionComponent,
    TitleComponent,
    TodayComponent,
    BoxoptionComponent,
    ViewmoreComponent,
    OnfooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
