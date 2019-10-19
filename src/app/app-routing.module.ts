import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { EIDComponent } from './eid/eid.component';

const routes: Routes = [
    { path: 'eids', pathMatch: 'full', component: EIDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }