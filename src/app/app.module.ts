// the root module, tells angular how to build the app
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//first component.. but will delare more as it grows
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
