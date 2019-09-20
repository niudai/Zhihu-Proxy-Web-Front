import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class QuestionViewComponent implements OnInit {

  answers: any[];

  constructor(
    private service: QuestionService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { answers: any}) => {
      this.answers = data.answers;
    });
  }

}
