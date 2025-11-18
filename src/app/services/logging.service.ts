import { Injectable } from '@angular/core';
import { FirebaseConfigService } from './firebase-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(public firebaseConfigService:FirebaseConfigService) { }
  fileUploadEntryLog:string="New File Uploaded : ";
  fileDownloadEntryLog:string="File Downloaded : ";
  fileDeleteEntryLog:string="File Deleted : ";
  loginEntryLog:string="User logged in";

  
  fileUploadEntry(fileName:string){
    this.firebaseConfigService.addLog(this.fileUploadEntryLog+fileName)
  }

  fileDownloadEntry(fileName:string){
    this.firebaseConfigService.addLog(this.fileDownloadEntry+fileName)
    
  }

  fileDeleteEntry(fileName:string){
    this.firebaseConfigService.addLog(this.fileDeleteEntry+fileName)
  }

  loginEntry(){
    this.firebaseConfigService.addLog(this.loginEntryLog)
  }

  
}
