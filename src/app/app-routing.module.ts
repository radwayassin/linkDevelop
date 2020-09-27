import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PressFilterPageComponent } from './press-filter-page/press-filter-page.component';
import { PressDetailsPageComponent } from './press-details-page/press-details-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'press-releases', component: PressFilterPageComponent },
  { path: 'press-details', component: PressDetailsPageComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
