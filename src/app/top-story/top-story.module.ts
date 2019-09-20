import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoryViewComponent } from './view/view.component';
import { TopStoryRoutingModule } from './top-story-routing.module';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLibModule } from '../mat-lib/mat-lib.module';


@NgModule({
  declarations: [TopStoryViewComponent],
  imports: [
    CommonModule,
    TopStoryRoutingModule,
    MatLibModule
  ]
})
export class TopStoryModule { }
