import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material Elements */
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

/* Components */
import { CategoryCardComponent } from './category-card/category-card.component';
import { HighlightCardDirective } from './highlight-card.directive';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { SongPlayerComponent } from './song-player/song-player.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    HighlightCardDirective,
    QuestionsComponent,
    AnswersComponent,
    HomepageComponent,
    QuestionCardComponent,
    SongPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
