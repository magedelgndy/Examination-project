import { Student } from '../../Interfaces/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ExamData } from 'src/app/Interfaces/exam-data';
import { QuestionService } from 'src/app/services/question.service';
import { Answers } from 'src/app/Interfaces/answers';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']


})
export class ExamComponent implements OnInit{
  UserId:(string|null);

  ExamId:any;
  ExamData:ExamData ={} as ExamData;

  flag:boolean=false;
  answerString:string='';
  addedOnce:boolean=false;
  QnameAddedToScore:{Qnum:number ,answer:string}[]=[]


  score:number=0;

  checkForLastAnswers:number=0

  answers:Answers[]=[]

  constructor(private _questionService:QuestionService,
    private _usersService:UsersService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router)
  {
    this.UserId = localStorage.getItem("Token")

    this.ExamId = _activatedRoute.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.getExamData();

  }

getExamData():void
{
  this._questionService.getQuestions(this.ExamId)
  .subscribe({
    next:res => {
      this.ExamData=res;
      this.allquestions =this.ExamData.questions.length;
      this.fetchNext();
    }
  });
}

  questions: any;
  allquestions: number = 5;
  pagination: number = 1;


  fetchNext() {
    this.questions = this.ExamData?.questions
  }

  result:Answers[]=[];

  renderPage(event: number) {
    this.pagination = event;

    //For submit button
    if(event == this.allquestions){this.flag =true}
    else{this.flag =false}


    //get from array to put previous answers
    this.result= this.answers.filter(n => n.numOfQuest == event)
    this.checkForLastAnswers = this.result[0]?.numOfans

  }


  numOfAns:number=0;

  changeScore(event:any,questID:number)
  {
    // console.log(event)

    this.answerString = event.target.defaultValue;

    if(this.answerString == this.questions[this.pagination-1].answer)
    {
      this.QnameAddedToScore.push({Qnum:questID,answer:this.answerString})

      console.log(`${this.answerString} ---- ${this.questions[this.pagination-1].answer}`)
      this.score = this.score+10;
      this.addedOnce=true
    }
    else
    {
      let obj = this.QnameAddedToScore.filter(n=>n.Qnum==questID);
      console.log(obj)
      if(obj.length !=0)
      {
        this.QnameAddedToScore=this.QnameAddedToScore.filter(n=>n.Qnum!=questID)

        this.score=this.score-10;
        console.log("miunus")

      }
    }

    this.numOfAns=event.target.attributes.id.value
    this.answers[questID]={numOfQuest:questID,numOfans:this.numOfAns,ans:this.answerString}
    // console.log( this.answers[questID])
  }


  std:Student={} as Student
  GetScore()
  {
    console.log(this.UserId)
    this._usersService.getUserById(this.UserId).subscribe({
      next:res=>{
        this.std=res;
        this.std.exam_name=this.ExamData.exam_name;
        this.std.grade=this.score.toString();
        this.setStudentData();
      },
      error:err=>console.log("error when loading student data")
    })


  }

  setStudentData()
  {
    this._questionService.setSutdentScore(`${this.UserId}`,this.std).subscribe({
      next:res=>{
        // console.log(res);
        this._router.navigate(["/Grade"])
      }
    })
  }

}
