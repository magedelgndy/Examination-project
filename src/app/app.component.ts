import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Examination';


  // questions: any[] = [];
  // currentQuestionIndex = 0;
  // score = 0;
  // pageSize = 5;
  // currentPage = 1;


  // config = {
  //   itemsPerPage: 1,
  //   currentPage: 1,
  //   totalItems: this.questions ? this.questions.length : 0
  // };


  // constructor(private _questionservice: QuestionService) { }


  // ngOnInit() {
  //   this.getQuestions();

  // }
  // getQuestions() {
  //   this._questionservice.getQuestions().subscribe(data => {
  //     console.log(data);
  //     this.questions = data.History.questions.concat(data.Science.questions);
  //     console.log(this.questions)
  //   });
  // }


  // checkAnswer(option: any) {
  //   const questionIndex = (this.config.currentPage - 1) * this.config.itemsPerPage;
  //   const currentQuestion = this.questions[questionIndex];

  //   if (!currentQuestion.answered) {
  //     console.log("yesssssssss");
  //     if (option === currentQuestion.answer) {
  //       this.score++;
  //     }
  //     currentQuestion.answered = true;
  //   } else {
  //   }
  // }

  // nextQuestion() {
  //   if (this.currentQuestionIndex < this.questions.length - 1) {
  //     this.currentQuestionIndex += this.pageSize;
  //     this.currentPage++;
  //   }
  // }


  // previousPage() {
  //   if (this.config.currentPage > 1) {
  //     this.config.currentPage--;
  //   }
  // }

  // nextPage() {
  //   if (this.config.currentPage < Math.ceil(this.questions.length / this.config.itemsPerPage)) {
  //     this.config.currentPage++;
  //   }
  // }
  // isLastPage() {
  //   return this.config.currentPage === Math.ceil(this.questions.length / this.config.itemsPerPage);
  // }
  // isFirstPage() {
  //   return this.config.currentPage === 1;
  // }

}
