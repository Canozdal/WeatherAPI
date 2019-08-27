import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './components/app.component';
import { APIRequestLocService } from './services/apirequest-loc.service';
import { APIRequestWebService } from './services/apirequest-web.service';
import { TableComponent } from './components/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule
  ],
  providers: [APIRequestLocService, APIRequestWebService, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
