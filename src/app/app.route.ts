import { Routes } from '@angular/router';


export const appRoute: Routes = [
    {
        path: 'topStory',
        loadChildren: () => import('./top-story/top-story.module').then(mod =>
          mod.TopStoryModule)
    }
]