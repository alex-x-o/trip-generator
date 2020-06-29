import { Injectable } from '@angular/core';
import { Questions } from 'src/models/questions.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class QuestionsService {
  private fileName = 'assets/json/questions.json';
  shareAnswers$: Observable<string>;
  private shareAnswersSubject = new Subject<string>();

  constructor(private http: HttpClient) {
    this.shareAnswers$ = this.shareAnswersSubject.asObservable();
  }

  getQuestions(): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.fileName);
  }

  shareAnswers(answers) {
    console.log(answers);
    this.shareAnswersSubject.next(answers);
  }
}
