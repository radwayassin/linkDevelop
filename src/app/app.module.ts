import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';  
import { AppComponent } from './app.component';
import { FooterComponent } from './SharedCom/footer/footer.component';
import { HeaderComponent } from './SharedCom/header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
