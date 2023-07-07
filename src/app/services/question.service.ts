import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Interfaces/student';
import { ExamData } from '../Interfaces/exam-data';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  baseUrl: string = 'http://localhost:3005';

  constructor(private _httpClient: HttpClient) {}

  getQuestions(ExamId: string): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/exams/${ExamId}`);
  }

  getCourses(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/exams`);
  }

  UpdateQuestion(id: string, EditObj: ExamData) {
    return this._httpClient.put(`${this.baseUrl}/exams/${id}`, EditObj);
  }

  AddQuestion(id: string, EditObj: ExamData) {
    return this._httpClient.put(`${this.baseUrl}/exams/${id}`, EditObj);
  }

  setSutdentScore(id: string, EditObj: Student) {
    return this._httpClient.put(`${this.baseUrl}/users/${id}`, EditObj);
  }

  addExam(exam: any) {
    return this._httpClient.post(`${this.baseUrl}/exams`, exam);
  }
}
