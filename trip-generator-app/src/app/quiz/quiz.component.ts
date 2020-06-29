import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from 'src/services/questions.service';
import { DataService } from 'src/services/data.service';
import { Questions } from '../../models/questions.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Questions[] = [];
  public answersForm: FormGroup;
  public category = '';

  constructor(private service: QuestionsService,
              private formBuilder: FormBuilder,
              private router: Router,
              private data: DataService) {
    const group = {};
    for (let i = 0; i < 5; i++) {
      i.toString();
      group[i] = ['', Validators.required];
    }
    this.answersForm = this.formBuilder.group(group);
  }

  ngOnInit(): void {
    this.service.getQuestions().subscribe(
      questions => this.questions = questions,
      error => console.error(error)
    );
  }

  public submitForm(data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
      console.log(data[i]);
      this.category += data[i];
      console.log(this.category);
    }
    this.data.shareAnswers(this.category);
    this.router.navigate(['/plan']);
  }

}
