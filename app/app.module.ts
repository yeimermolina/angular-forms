import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import	{	ReactiveFormsModule, FormsModule	}	from	'@angular/forms';
import { AppComponent }  from './app.component';
import {DemoFormSkuBuilder} from './forms-reactive.component';
@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent,DemoFormSkuBuilder ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
