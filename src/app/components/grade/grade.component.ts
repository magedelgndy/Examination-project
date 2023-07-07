import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Interfaces/student';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit{

  std:Student ={} as Student
  UserID:string =''
  constructor(private _usersService:UsersService)
  {
    _usersService.UserId.subscribe({
      next:res=>this.UserID = res});
      console.log(this.UserID)
  }

  ngOnInit(): void {
    this.getStudentData()
  }


  getStudentData()
  {
    this._usersService.getUserById(this.UserID).subscribe({
      next:res=>this.std=res,
      error:err=>console.log("error when loading student data")
    })

  }



}
