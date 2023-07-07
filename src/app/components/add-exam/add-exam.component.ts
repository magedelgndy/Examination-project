import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css'],
})
export class AddExamComponent {
  exam_name: string = '';
  exam: any;
  constructor(
    private _questionService: QuestionService,
    private _router: Router
  ) {}
  addNewExam(exam: any) {
    exam = { exam_name: this.exam_name, questions: [] };
    this._questionService.addExam(exam).subscribe(() => {});
    alert('You Can Add Questions From Questions Section');
    this._router.navigate(['/Edit']);
  }
}
