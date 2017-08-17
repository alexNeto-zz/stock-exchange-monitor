import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GraphComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
