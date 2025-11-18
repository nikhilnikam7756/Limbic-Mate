import { Component, OnInit } from '@angular/core';
import { FileModel } from 'src/app/models/FileModel';
import { FirebaseConfigService } from 'src/app/services/firebase-config.service';

@Component({
  selector: 'app-file-list-component',
  templateUrl: './file-list-component.component.html',
  styleUrls: ['./file-list-component.component.css']
})
export class FileListComponentComponent implements OnInit {
  filesList: FileModel[] = [];
  constructor(public firebaseConfigService:FirebaseConfigService) { }

  ngOnInit(): void {
    this.getFiles()
  }
  getFiles(){
    this.firebaseConfigService.getFiles().subscribe(
      (actionArray: any[]) =>{
        this.filesList = actionArray.map((item: any) =>{
          var recvdData = JSON.parse(JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          console.log("Item:"+JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          return new FileModel(
              recvdData['fileSize'],
              recvdData['fileName'],
              recvdData['downloadUrl'],
              recvdData['lastModified'],
              recvdData['key'],
              );
            }
          );
      });
      console.log("List:"+this.filesList)
    }

    formatSizeUnits(bytes:number){
      let sizeValue = "";
      if      (bytes >= 1073741824) { sizeValue = (bytes / 1073741824).toFixed(2) + " GB"; }
      else if (bytes >= 1048576)    { sizeValue = (bytes / 1048576).toFixed(2) + " MB"; }
      else if (bytes >= 1024)       { sizeValue = (bytes / 1024).toFixed(2) + " KB"; }
      else if (bytes > 1)           { sizeValue = bytes + " bytes"; }
      else if (bytes == 1)          { sizeValue = bytes + " byte"; }
      else                          { sizeValue = "0 bytes"; }
      return sizeValue;
    }

    stringToNumber(no:string){
      return Number(no);
    }
}
