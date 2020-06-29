import { Answers } from './answers.model';

export class Questions {
  constructor(public name: string,
              public title: string,
              public answers: Answers[]) {}
}
