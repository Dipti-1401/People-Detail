import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { 
    path: "people-detail",
    component: PeopleDetailComponent
  },
  {
    path: "",
    redirectTo: "people-detail",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
