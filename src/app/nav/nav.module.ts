import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';



@NgModule({
  declarations: [TopNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavbarComponent
  ]
})
export class NavModule { }
