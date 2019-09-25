import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionViewComponent } from './view/view.component';
import { QuestionRoutingModule } from './question-routing.module';
import { MatLibModule } from '../mat-lib/mat-lib.module';



@NgModule({
  declarations: [QuestionViewComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MatLibModule
  ]
})
export class QuestionModule { }
