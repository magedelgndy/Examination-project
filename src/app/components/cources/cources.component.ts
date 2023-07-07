import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit{

  courses:any;

  constructor(private _questionService:QuestionService,private _router:Router){}

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses()
  {
    this._questionService.getCourses().subscribe({
      next:res=>this.courses=res,
      error:err=>console.log("error in courses comp")
    })
  }

  goToExam(id:number)
  {
    this._router.navigate([`/Courses/${id}`]);
  }


}
