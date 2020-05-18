import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MylocsComponent } from '../app/mylocs/mylocs.component';
import { AboutComponent } from '../app/about/about.component';
import { ErrorComponent } from '../app/error/error.component';



const routes: Routes = [
  { path: '', component: MylocsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
