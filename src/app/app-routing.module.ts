import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { EIDComponent } from './eid/eid.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: 'eids', pathMatch: 'full', component: EIDComponent },
    //{ path: '', redirectTo: '/', pathMatch: 'full' }
    { path: '', pathMatch: 'full', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }