import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Interfaces/student';
import { IUser } from '../Interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://localhost:3005/Users';
  currentUser: IUser | undefined;
  UserId: BehaviorSubject<any> = new BehaviorSubject(null);
  id:string=''

  constructor(private _httpClient: HttpClient) {
    this.UserId.subscribe({
      next: (res) => (this.id = res),
    });

    if(localStorage.getItem('userName')!=null)
    {this.checkLogin()}

  }

  getAllUsers(): Observable<any> {
    return this._httpClient.get(this.url);
  }

  getUserById(userId: any): Observable<any> {
    return this._httpClient.get(`${this.url}/${userId}`);
  }

  addUser(user: any) {
    return this._httpClient.post(this.url, user);
  }

  login(userName: string, password: string)
  {
    this.currentUser = {
      userName: userName,
      password: password,
    };
    let id;
    this.UserId?.subscribe({ next: (res) => (id = res) });
    localStorage.setItem('Token', `${id}`);
    localStorage.setItem('userName', `${userName}`);
    localStorage.setItem('password', `${password}`);
  }

  checkLogin()
  {
    this.currentUser = {
      userName: `${localStorage.getItem("userName")}`,
      password: `${localStorage.getItem("password")}`,
    };
    let id=`${localStorage.getItem("id")}`;
    this.UserId.next(id);
  }


  deleteuser(id: any) {
    return this._httpClient.delete(`${this.url}/${id}`);
  }

  get isLoggedin(): boolean {
    if (this.currentUser?.userName && this.currentUser.password) return true;
    return false;
  }

  logout() {
    this.currentUser = undefined;
    localStorage.removeItem('Token');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
  }
  get IsAdmin() {
    if(localStorage.getItem('userName')!=null)
    {
      this.UserId.next(`${localStorage.getItem("Token")}`);
      this.id =`${localStorage.getItem("Token")}`;
      if(this.id  == "0")
      {
        this.id=this.UserId.value
        return true
      }
    }
    return false
  }
}
