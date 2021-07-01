import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SongPlayerComponent } from './song-player/song-player.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
},
{
    path: 'answers',
    component: AnswersComponent
},
{
    path: 'song-player',
    component: SongPlayerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
