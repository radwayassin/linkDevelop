import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';  
import { AppComponent } from './app.component';
import { FooterComponent } from './SharedCom/footer/footer.component';
import { HeaderComponent } from './SharedCom/header/header.component';
import { HomeComponent } from './home/home.component';
import { PressReleasesComponent } from './home/press-releases/press-releases.component';
import { PressFilterPageComponent } from './press-filter-page/press-filter-page.component';
import { PressDetailsPageComponent } from './press-details-page/press-details-page.component';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PressReleasesComponent,
    PressFilterPageComponent,
    PressDetailsPageComponent,
    SearchPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
