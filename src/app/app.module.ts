import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocItemComponent } from './loc-item/loc-item.component';
import { MylocsComponent } from './mylocs/mylocs.component';

@NgModule({
  declarations: [
    AppComponent,
    LocItemComponent,
    MylocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
