import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { FloatingActionBtnComponent } from './floating-action-btn/floating-action-btn.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatLibModule } from '../mat-lib/mat-lib.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TopNavbarComponent, FloatingActionBtnComponent],
  imports: [
    CommonModule,
    MatLibModule,
    RouterModule
  ],
  exports: [
    TopNavbarComponent,
    FloatingActionBtnComponent
  ]
})
export class NavModule { }
