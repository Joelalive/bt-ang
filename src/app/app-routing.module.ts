import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:'./pages/home/home.module#HomeModule'
  },{
    path:'contact',
    loadChildren:'./pages/contact/contact.module#ContactModule'
  },{
    path:'packages',
    loadChildren:'./pages/package/package.module#PackageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
