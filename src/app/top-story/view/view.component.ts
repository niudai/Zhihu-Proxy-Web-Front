import { Component, OnInit } from '@angular/core';
import { TopStoryService } from '../top-story.service';
import { ActivatedRoute } from '@angular/router';

export interface NavBtnInfo {
  routerLink: string;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class TopStoryViewComponent implements OnInit {
  isLoading: boolean;
  navBtnInfos: NavBtnInfo[] = [
    { routerLink: null, name: '热榜', isActive: true},
    { routerLink: 'sport', name: '运动', isActive: false},
    { routerLink: 'science', name: '科学', isActive: false},
    { routerLink: 'fashion', name: '时尚', isActive: false},
    { routerLink: 'film', name: '影视', isActive: false},
    { routerLink: 'digital', name: '数码', isActive: false}
  ];

  activatedNavBtn: NavBtnInfo;

  topStories: any[];

  constructor(public service: TopStoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = false;
    this.route.data.subscribe((data: { stories: any}) => {
      this.topStories = data.stories;
    });
    this.activatedNavBtn = this.navBtnInfos[0];
    console.log('Hello');
  }

  navBtnToggle(btn: NavBtnInfo) {
    this.activatedNavBtn.isActive = false;
    btn.isActive = true;
    this.activatedNavBtn = btn;
    this.isLoading = true;
    this.service.getTopStory(btn.routerLink).subscribe(
      res => {
        this.topStories = res;
        this.isLoading = false;
      }
    );
  }
}
