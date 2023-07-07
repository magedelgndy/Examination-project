import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourcesComponent } from './components/cources/cources.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ExamComponent } from './components/exam/exam.component';
import { GradeComponent } from './components/grade/grade.component';
import { AuthGuard } from './Gards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './Gards/admin.guard';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { ViewAllQuestionsComponent } from './view-all-questions/view-all-questions.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddExamComponent } from './components/add-exam/add-exam.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home' },

  { path: 'Courses', component: CourcesComponent, title: 'Courses' },
  {
    path: 'Courses/:id',
    canActivate: [AuthGuard],
    component: ExamComponent,
    title: 'Exam',
  },
  {
    path: 'Grade',
    canActivate: [AuthGuard],
    component: GradeComponent,
    title: 'Grade',
  },
  { path: 'Login', component: LoginComponent, title: 'Login' },
  { path: 'Register', component: RegisterComponent, title: 'Register' },
  {
    path: 'Students',
    component: AllStudentsComponent,
    canActivate: [AuthGuard],
    title: 'Students',
  },
  { path: 'Contact', component: ContactUsComponent, title: 'Contact Us' },

  {
    path: 'Edit',
    component: ViewAllQuestionsComponent,
    canActivate: [AuthGuard],
    title: 'View Exams',
  },
  {
    path: 'Edit/:id/:qnum',
    component: EditQuestionsComponent,
    canActivate: [AuthGuard],
    title: 'Edit Question',
  },
  {
    path: 'Add/:id',
    component: AddQuestionComponent,
    canActivate: [AuthGuard],
    title: 'Add Question',
  },
  {
    path: 'addExam',
    component: AddExamComponent,
    canActivate: [AuthGuard],
    title: 'Add Exam',
  },
  { path: '**', component: NotFoundComponent, title: 'NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
