import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoryViewComponent } from './view/view.component';
import { TopStoryRoutingModule } from './top-story-routing.module';



@NgModule({
  declarations: [TopStoryViewComponent],
  imports: [
    CommonModule,
    TopStoryRoutingModule
  ]
})
export class TopStoryModule { }
