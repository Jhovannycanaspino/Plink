import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorService } from './services/header-interceptor.service';
import { PricelistComponent } from './screens/pricelist/pricelist.component';
import { ConvertComponent } from './screens/convert/convert.component';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    PricelistComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule.forRoot({})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
