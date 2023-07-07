import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Router } from '@angular/router';
import { ExamData } from '../Interfaces/exam-data';

@Component({
  selector: 'app-view-all-questions',
  templateUrl: './view-all-questions.component.html',
  styleUrls: ['./view-all-questions.component.css'],
})
export class ViewAllQuestionsComponent {
  courses: ExamData[] = [];
  flag: boolean = false;

  ExamData: ExamData = {} as ExamData;

  constructor(
    private _questionService: QuestionService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this._questionService.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
      },
      error: (err) => console.log('error in courses comp'),
    });
  }

  editQuestion(id: number, ques: number) {
    this._router.navigate([`/Edit/${id}/${ques}`]);
  }

  removeQuestion(id: number, ques: number) {
    let result = confirm('Want to delete?');
    if (result) {
      this.ExamData = this.courses[id - 1];
      let x = this.ExamData.questions.filter((q) => q.num != ques + 1);
      this.ExamData.questions = x;
      this._questionService.UpdateQuestion(`${id}`, this.ExamData).subscribe({
        next: (res) => console.log('done'),
      });
    }
  }

  addQestion(id: number) {
    this._router.navigate([`/Add/${id}`]);
  }

  addExam() {
    this._router.navigate([`/addExam`]);
  }
}
