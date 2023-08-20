import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCakeComponent } from './components/list-cake/list-cake.component';
import { AjoutCakeComponent } from './components/ajout-cake/ajout-cake.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/ajout', pathMatch:'full'},
  {path:'list',component: ListCakeComponent},
  {path:'ajout',component: AjoutCakeComponent},
  

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
