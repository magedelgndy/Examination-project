import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
})
export class AllStudentsComponent implements OnInit {
  users: any;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.allusers();
  }

  allusers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  deleteUser(id: any) {
    this.userService.deleteuser(id).subscribe(() => {
      this.users = this.users.filter((user: any) => user.id != id);
    });
  }
}
