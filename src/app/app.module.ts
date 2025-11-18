import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FileListComponentComponent } from './components/file-list-component/file-list-component.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';
import { FirebaseConfigService } from './services/firebase-config.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CryptoBlock } from './models/CryptoBlock';
import { LoggingService } from './services/logging.service';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import { AuditorNavBarComponent } from './components/auditor-nav-bar/auditor-nav-bar.component';
import { AuditorHomePageComponent } from './pages/auditor-home-page/auditor-home-page.component';
import { AuditorsListComponent } from './components/auditors-list/auditors-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MasterBLockChainListComponent } from './components/master-block-chain-list/master-block-chain-list.component';
import { AuditIndividualChainPageComponent } from './pages/audit-individual-chain-page/audit-individual-chain-page.component';
import { UserChainListComponent } from './components/user-chain-list/user-chain-list.component';

import { DairyComponent } from './pages/dairy/dairy.component';


var config = {
  apiKey: "AIzaSyBgfQwlPHskRWfZncdteBh4TL2qX31p4Wk",
  authDomain: "auditblockchain-76931.firebaseapp.com",
  projectId: "auditblockchain-76931",
  storageBucket: "auditblockchain-76931.appspot.com",
  messagingSenderId: "232881850494",
  appId: "1:232881850494:web:90d46d8972940c13a3702f",
  measurementId: "G-Q7PWFN9D4H"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SideNavBarComponent,
    HomePageComponent,
    FileListComponentComponent,
    UploadPageComponent,
    AdminHomePageComponent,
    AdminNavBarComponent,
    AuditorNavBarComponent,
    AuditorHomePageComponent,
    AuditorsListComponent,
    UsersListComponent,
    MasterBLockChainListComponent,
    AuditIndividualChainPageComponent,
    UserChainListComponent,
   
    DairyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    RouterModule

  ],
  providers: [
    AuthService,
    FirebaseConfigService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
