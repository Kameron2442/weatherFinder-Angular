import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocItemComponent } from './loc-item/loc-item.component';
import { MylocsComponent } from './mylocs/mylocs.component';
import { NewLocComponent } from './new-loc/new-loc.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LocQuickViewComponent } from './loc-quick-view/loc-quick-view.component';
import { TempConversionPipe } from './pipes/temp-conversion.pipe';
import { SpeedConversionPipe } from './pipes/speed-conversion.pipe';
import { LocForecastComponent } from './loc-forecast/loc-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    LocItemComponent,
    MylocsComponent,
    NewLocComponent,
    AboutComponent,
    ErrorComponent,
    LocQuickViewComponent,
    TempConversionPipe,
    SpeedConversionPipe,
    LocForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
