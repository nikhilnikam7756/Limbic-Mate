import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AuditorHomePageComponent } from './pages/auditor-home-page/auditor-home-page.component';
import { AuditIndividualChainPageComponent } from './pages/audit-individual-chain-page/audit-individual-chain-page.component';
import { DairyComponent } from './pages/dairy/dairy.component';


const routes: Routes = [
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'registerPage', component: RegisterPageComponent},
  { path: 'homePage', component: HomePageComponent },
  { path: 'uploadFilePage', component: UploadPageComponent },
  { path: 'adminHomePage', component: AdminHomePageComponent },
  { path: 'auditorHomePage', component:AuditorHomePageComponent },
  { path: 'auditIndividualUser', component:AuditIndividualChainPageComponent },
  {path: 'DairyComponent', component:DairyComponent},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
