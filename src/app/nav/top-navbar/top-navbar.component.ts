import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';


export interface NavBtnInfo {
  name: string;
  ch: string;
}

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
