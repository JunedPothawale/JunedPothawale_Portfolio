import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './error-component/error-component.component';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
  }, {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: "**", component: ErrorComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
