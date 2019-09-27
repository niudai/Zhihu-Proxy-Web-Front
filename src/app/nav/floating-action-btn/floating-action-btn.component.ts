import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

@Component({
  selector: 'app-floating-action-btn',
  templateUrl: './floating-action-btn.component.html',
  styleUrls: ['./floating-action-btn.component.css']
})
export class FloatingActionBtnComponent implements OnInit {

  faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
