import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MylocsComponent } from '../app/mylocs/mylocs.component';
import { AboutComponent } from '../app/about/about.component';
import { ErrorComponent } from '../app/error/error.component';
import { LocQuickViewComponent } from '../app/loc-quick-view/loc-quick-view.component';



const routes: Routes = [
  { 
    path: '',
    component: MylocsComponent,
    children: [
      {
        path: 'Loc', // child route path
        component: LocQuickViewComponent // child route component that the router renders
      }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
