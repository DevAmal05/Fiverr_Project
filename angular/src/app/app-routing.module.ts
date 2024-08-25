import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuardService } from './auth-guard.service';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
 
  { path:'register', component:RegisterComponent },
  { path:'people-list',canActivate:[AuthGuardService] ,component:PeopleListComponent },
  { path:'add-user',canActivate:[AuthGuardService], component:AddUserComponent },
  { path:'update-user/:id',canActivate:[AuthGuardService], component:UpdateUserComponent },
  { path:'resetpassword', component:ResetpasswordComponent },







  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
