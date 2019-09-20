import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLibModule } from '../mat-lib/mat-lib.module';
import { TopStoryRoutingModule } from './top-story-routing.module';
import { TopStoryViewComponent } from './view/view.component';


@NgModule({
  declarations: [TopStoryViewComponent],
  imports: [
    CommonModule,
    TopStoryRoutingModule,
    MatLibModule
  ]
})
export class TopStoryModule { }
