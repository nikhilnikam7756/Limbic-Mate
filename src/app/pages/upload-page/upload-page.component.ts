import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'src/app/models/FileUpload.';
import { FirebaseConfigService } from './../../services/firebase-config.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  
  @ViewChild('form') form!: ElementRef;
  @ViewChild('inputFileTag') inputFileTag!: ElementRef;
  currentFileUpload!: FileUpload;
  percentage: number | undefined = 0;
  selectedFiles!: FileList | null;
  fileSelectedForUpload:boolean = false;
  selectedFile!: File;

  constructor(
   public fireBaseConfigService:FirebaseConfigService,
   public log:LoggingService
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    // this.inputFileTag.nativeElement.addEventListener('change', this.selectFile);
  }
  
  handleFormClick(){
    console.log("ON Form click")
    this.openFilePicker();
  }
  
  openFilePicker(){
    console.log("DNJDNSJ");
    this.inputFileTag.nativeElement.click();
  }


  selectFile(event: Event): void {
    const ev = event.target as HTMLElement | null;
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;
    this.selectedFiles = files;
      if (files && files.length > 0) {
            this.selectedFile = files[0];
            this.fileSelectedForUpload = true;
            console.log(this.selectedFile);
    } 
  }

  clearInputFile(elementId: string): void {
    const inputFileElement = document.getElementById(elementId) as HTMLInputElement;
    if (inputFileElement) {
      inputFileElement.value = '';
    }
  }
  
  upload(): void | Promise<void>{
    console.log("Upload")
    this.currentFileUpload = new FileUpload(this.selectedFile);
    this.fireBaseConfigService.fileUpload(this.currentFileUpload).then(
      percentage => {
        percentage.subscribe(progress=>{
          this.percentage =  Math.round(progress !== undefined ? progress : 0);
          console.log("Progress:"+this.percentage);
          if(Math.round(progress !== undefined ? progress : 0) == 100){
            console.log("Finally done")
            this.clearInputFile("fileUploadInput")    
            this.fileSelectedForUpload = false
            this.percentage = 0
            this.log.fileUploadEntry(this.currentFileUpload.name);
            window.alert("File uploaded Successfully!");
          }
        })
      },
      error => {
        console.log(error);
      }
    );  
  }

 
  // upload(): void {
  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = Files[];

  //   this.currentFileUpload = new FileUpload(file);
  //   this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
  //     percentage => {
  //       this.percentage = Math.round(percentage);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  // uploadFile(name:string){
  //   let xhr = new XMLHttpRequest();
  //   xhr.open("POST", "php/upload.php");
  //   xhr.upload.addEventListener("progress", ({loaded, total}) =>{
  //     let fileLoaded = Math.floor((loaded / total) * 100);
  //     let fileTotal = Math.floor(total / 1000);
  //     let fileSize;
  //     (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
  //     let progressHTML = `<li class="row">
  //                           <i class="fas fa-file-alt"></i>
  //                           <div class="content">
  //                             <div class="details">
  //                               <span class="name">${name} • Uploading</span>
  //                               <span class="percent">${fileLoaded}%</span>
  //                             </div>
  //                             <div class="progress-bar">
  //                               <div class="progress" style="width: ${fileLoaded}%"></div>
  //                             </div>
  //                           </div>
  //                         </li>`;
  //     uploadedArea.classList.add("onprogress");
  //     progressArea.innerHTML = progressHTML;
  //     if(loaded == total){
  //       progressArea.innerHTML = "";
  //       let uploadedHTML = `<li class="row">
  //                             <div class="content upload">
  //                               <i class="fas fa-file-alt"></i>
  //                               <div class="details">
  //                                 <span class="name">${name} • Uploaded</span>
  //                                 <span class="size">${fileSize}</span>
  //                               </div>
  //                             </div>
  //                             <i class="fas fa-check"></i>
  //                           </li>`;
  //       uploadedArea.classList.remove("onprogress");
  //       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
  //     }
  //   });
  //   let data = new FormData(form);
  //   xhr.send(data);
  // }

    // handleChange(event: Event){
  //   // console.log("ON File change")
  //   const target = event.target as HTMLInputElement;
  //   const files: FileList | null = target.files;

  //   if (files && files.length > 0) {
  //     const selectedFile: File = files[0];
  //     console.log(selectedFile);

  //     for (let i = 0; i < files.length; i++) {
  //       const file: File = files[i];
  //       console.log(file);
  //     }
  //   }
  // }

}
