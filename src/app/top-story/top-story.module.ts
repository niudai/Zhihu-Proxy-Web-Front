import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoryViewComponent } from './view/view.component';
import { TopStoryRoutingModule } from './top-story-routing.module';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [TopStoryViewComponent],
  imports: [
    CommonModule,
    TopStoryRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class TopStoryModule { }
