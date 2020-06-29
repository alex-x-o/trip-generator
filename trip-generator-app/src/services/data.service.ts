import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class DataService {
  shareAnswers$: Observable<string>;
  private shareAnswersSubject = new BehaviorSubject('default');

  constructor() {
    this.shareAnswers$ = this.shareAnswersSubject.asObservable();
  }

  shareAnswers(answers) {
    console.log(answers);
    this.shareAnswersSubject.next(answers);
  }
}
