import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './_components/contact/contact.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
// datepicker
import { DatepickerComponent } from './_components/datepicker/datepicker/datepicker.component';
import { DatepickergComponent } from './_components/datepicker/datepickerg/datepickerg.component';
import { DatepickerhComponent } from './_components/datepicker/datepickerh/datepickerh.component';
// share data 
import { ParentComponent } from './_components/sharedata/parent/parent.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'datepicker', component: DatepickerComponent },
  {path: 'datepickerg', component: DatepickergComponent },
  {path: 'datepickerh', component: DatepickerhComponent },
  {path: 'share', component: ParentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
