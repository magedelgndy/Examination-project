import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourcesComponent } from './components/cources/cources.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ExamComponent } from './components/exam/exam.component';
import { GradeComponent } from './components/grade/grade.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { ViewAllQuestionsComponent } from './view-all-questions/view-all-questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddExamComponent } from './components/add-exam/add-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourcesComponent,
    NotFoundComponent,
    HomeComponent,
    ExamComponent,
    GradeComponent,
    LoginComponent,
    RegisterComponent,
    AllStudentsComponent,
    EditQuestionsComponent,
    ViewAllQuestionsComponent,
    AddQuestionComponent,
    FooterComponent,
    ContactUsComponent,
    AddExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
