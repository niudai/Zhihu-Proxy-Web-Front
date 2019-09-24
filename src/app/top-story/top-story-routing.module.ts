import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TopStoryViewComponent } from './view/view.component';
import { TopStoryService } from './top-story.service';
import { Observable, of, EMPTY, interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class TopStoryResolverService implements Resolve<any> {
  constructor(private service: TopStoryService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const storyType = route.paramMap.get('storyType');

    return this.service.getTopStory(storyType).pipe(
      // take(1),
      mergeMap(stories => {
        if (stories) {
          return of(stories);
        } else {
          // this.router.navigate(['']);
          return EMPTY;
        }
      })
    );
  }
}

const routes: Routes = [
  {
    path: ':storyType',
    component: TopStoryViewComponent,
    resolve: {
      stories: TopStoryResolverService
    }
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
