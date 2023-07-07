import { ExamData } from 'src/app/Interfaces/exam-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { FormControlName, FormGroup } from '@angular/forms';
import { QuestionData } from '../Interfaces/question-data';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit{
  ID:string='';
  Qnum:string='';
  QuestData:QuestionData={} as QuestionData;
  QuestDataSperated:{
    num:number,
    question:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    answer:string
  }={num:0,question:'',option1:'',option2:'',option3:'',option4:'',answer:''}

  selected :boolean=false;
  flag =true
  ErrorMsg :string=''
  ExamData:ExamData={} as ExamData;

  constructor(private _activatedRoute:ActivatedRoute,
    private _questionService:QuestionService,private _router:Router)
  {
    this.ID =`${_activatedRoute.snapshot.paramMap.get('id')}`;
    this.Qnum =`${_activatedRoute.snapshot.paramMap.get('qnum')}`;
  }
  ngOnInit(): void {
    this.getExam();
  }

  getExam()
  {
    this._questionService.getQuestions(this.ID).subscribe({
      next:res=>{
        this.QuestData= res.questions[this.Qnum];
        this.ExamData =res;
        this.getQestData();
      },
      error:err=>console.log("error in responding")
    })
  }
  getQestData()
  {
    // console.log(this.ExamData)
    this.QuestDataSperated.num =this.QuestData.num;
    this.QuestDataSperated.question =this.QuestData.question;
    this.QuestDataSperated.option1 =this.QuestData.options[0];
    this.QuestDataSperated.option2 =this.QuestData.options[1];
    this.QuestDataSperated.option3 =this.QuestData.options[2];
    this.QuestDataSperated.option4 =this.QuestData.options[3];
    this.QuestDataSperated.answer =this.QuestData.answer;
    // console.log(this.QuestDataSperated)
  }

  onSelected(value:string)
  {
    this.selected=true
    this.ExamData.questions[Number(this.Qnum)].answer=value;
  }

  UpdateQuest()
  {
    this.ValidateData();
    if(this.flag)
    {

      if(!this.selected)
      {this.ExamData.questions[Number(this.Qnum)].answer=this.QuestDataSperated.option1}

      this.ExamData.questions[Number(this.Qnum)].num=this.QuestDataSperated.num;
      this.ExamData.questions[Number(this.Qnum)].question=this.QuestDataSperated.question;
      this.ExamData.questions[Number(this.Qnum)].options[0]=this.QuestDataSperated.option1;
      this.ExamData.questions[Number(this.Qnum)].options[1]=this.QuestDataSperated.option2;
      this.ExamData.questions[Number(this.Qnum)].options[2]=this.QuestDataSperated.option3;
      this.ExamData.questions[Number(this.Qnum)].options[3]=this.QuestDataSperated.option4;
      this._questionService.UpdateQuestion(this.ID,this.ExamData).subscribe({
        next:res=>{
          this._router.navigate(['/Edit']);
        }
      })
    }
    else{this.ErrorMsg ="Must Fill All feilds of question."}

  }

  ValidateData()
  {
    if(this.QuestDataSperated.answer =='' || this.QuestDataSperated.question ==''
    ||this.QuestDataSperated.question ==''||this.QuestDataSperated.option1 ==''||
    this.QuestDataSperated.option2 ==''||this.QuestDataSperated.option3 ==''
    ||this.QuestDataSperated.option4 =='')
    {
      this.flag=false;
    }
    else{this.flag=true}

  }


}
