import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileCmponent }  from './profile/profile.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ProfileCmponent ],
  bootstrap:    [ ProfileCmponent ]
})
export class CustomerAppModule { }
