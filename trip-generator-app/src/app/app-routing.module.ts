import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { DestinationsComponent } from './destinations/destinations.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'plan', component: DestinationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
