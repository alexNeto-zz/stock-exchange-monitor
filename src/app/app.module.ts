import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    GraphComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
