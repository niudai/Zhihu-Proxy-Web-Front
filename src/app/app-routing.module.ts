import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'topStory',
    loadChildren: () =>
      import('./top-story/top-story.module').then(mod => mod.TopStoryModule)
  },
  {
    path: 'question',
    loadChildren: () =>
      import('./question/question.module').then(mod => mod.QuestionModule)
  },
  {
    path: '',
    redirectTo: 'topStory/total',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
