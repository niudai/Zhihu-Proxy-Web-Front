import { Component, OnInit } from '@angular/core';
import { TopStoryService } from '../top-story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class TopStoryViewComponent implements OnInit {

  topStories: any[];

  constructor(public service: TopStoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { stories: any}) => {
      this.topStories = data.stories;
    });
    console.log('Hello');
  }

}
