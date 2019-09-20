import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionViewComponent } from './view/view.component';
import { QuestionRoutingModule } from './question-routing.module';



@NgModule({
  declarations: [QuestionViewComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
