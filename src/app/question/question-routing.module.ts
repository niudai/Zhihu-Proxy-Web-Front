import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { QuestionService } from './question.service';
import { ViewComponent } from './view/view.component';

@Injectable({ providedIn: 'root'})
export class QuestionResolverService implements Resolve<any> {
  constructor(private service: QuestionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const questionId = +route.paramMap.get('storyType');

    return this.service.getAnswers(questionId).pipe(
      take(1),
      mergeMap(answers => {
        if (answers) {
          return of(answers);
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
    path: ':questionId',
    component: ViewComponent,
    resolve: {
      answers: QuestionResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
