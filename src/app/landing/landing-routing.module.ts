import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent,
    children: [
      {
        path: 'home', component:HomeComponent
      },
      {
        path: 'services', component: ServicesComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'works', component: WorksComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: '', redirectTo:'home',pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
