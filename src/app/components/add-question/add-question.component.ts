import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamData } from 'src/app/Interfaces/exam-data';
import { QuestionData } from 'src/app/Interfaces/question-data';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  ID:string='';
  ErrorMsg :string=''
  ExamData:ExamData={} as ExamData;
  newQuestion:QuestionData={}as QuestionData;
  selected :boolean=false;

  NewQuestionData:{
    num:number,
    question:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    answer:string
  }={num:0,question:'',option1:'',option2:'',option3:'',option4:'',answer:''}


  flag:boolean=true;

  constructor(private _activatedRoute:ActivatedRoute,
    private _questionService:QuestionService,private _router:Router)
  {
    this.ID =`${_activatedRoute.snapshot.paramMap.get('id')}`;
  }
  ngOnInit(): void {
    this.getExam();
  }

  getExam()
  {
    this._questionService.getQuestions(this.ID).subscribe({
      next:res=>{
        this.ExamData =res;
      },
      error:err=>console.log("error in responding")
    })
  }

  AddQuest()
  {
    let length =this.ExamData.questions.length;
    this.NewQuestionData.num=length+1;

    if(!this.selected)
      {this.NewQuestionData.answer=this.NewQuestionData.option1;}

    this.ValidateData();

    if(this.flag)
    {
      this.newQuestion.num=this.NewQuestionData.num;
      this.newQuestion.question=this.NewQuestionData.question;
      this.newQuestion.options=[];
      this.newQuestion.options.push(this.NewQuestionData.option1);
      this.newQuestion.options.push(this.NewQuestionData.option2);
      this.newQuestion.options.push(this.NewQuestionData.option3);
      this.newQuestion.options.push(this.NewQuestionData.option4);
      this.newQuestion.answer=this.NewQuestionData.answer;

      this.ExamData.questions.push(this.newQuestion)
      this._questionService.AddQuestion(this.ID,this.ExamData).subscribe({
        next:res=>{
          this._router.navigate(['/Edit']);
        }
      })
    }
    else{this.ErrorMsg ="Must Fill All feilds of question."}


  }

  ValidateData()
  {
    if(this.NewQuestionData.answer =='' || this.NewQuestionData.question ==''
    ||this.NewQuestionData.question ==''||this.NewQuestionData.option1 ==''||
    this.NewQuestionData.option2 ==''||this.NewQuestionData.option3 ==''
    ||this.NewQuestionData.option4 =='')
    {
      this.flag=false;
    }
    else{this.flag=true}
  }

  onSelected(value:string)
  {
    this.selected=true;
    this.NewQuestionData.answer=value;
  }

}
