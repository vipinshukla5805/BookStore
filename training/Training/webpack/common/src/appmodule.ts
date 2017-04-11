import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderCmponent }  from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

export class ProfileCmponent{

}

export class CustomerAppModule{
  
}

const appRoutes: Routes = [
  { path:'',redirectTo:'profile',pathMatch:'full' },
  { path:'customer',component:HeaderCmponent},
  { path:'profile',component:ProfileCmponent},

];

@NgModule({
  imports:      [ 
   BrowserModule,
   CustomerAppModule,
   RouterModule.forRoot(appRoutes)
    ],
  declarations: [ 
    HeaderCmponent,
    ProfileCmponent 
    ],
  bootstrap:    [ HeaderCmponent ]
})
export class AppModule { }
