import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopStoryViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: ':id',
    component: TopStoryViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopStoryRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/