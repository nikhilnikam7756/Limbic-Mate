import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { FirebaseConfigService } from 'src/app/services/firebase-config.service';

@Component({
  selector: 'app-audit-individual-chain-page',
  templateUrl: './audit-individual-chain-page.component.html',
  styleUrls: ['./audit-individual-chain-page.component.css']
})
export class AuditIndividualChainPageComponent implements OnInit {
  userEmail:string = "";
  filecontents:string = "";

  constructor(public firebaseServiceConfig:FirebaseConfigService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['userEmail'];
      console.log('Fetched User Email on AuditIndividualPage'+this.userEmail);
    });
   }


  
  ngOnInit(): void {
  }

  async downloadLog(){
   console.log("Download Log called")
   let logs:[]; 
   await this.firebaseServiceConfig.getLogs(this.userEmail).then(val=>{
      val.subscribe(userData=>{     
        logs = JSON.parse(JSON.stringify(userData["log"]))
        logs.forEach(logValue => {
          this.filecontents = this.filecontents +"\n"+ logValue
          
        });
        console.log(this.filecontents)
        this.downloadLogFile(this.filecontents,`${this.userEmail}.log`)
    })
  });
 }



  downloadLogFile(content: string, fileName: string) {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  async markChainVerified(){
    console.log("Mark chain verified called")
    await this.firebaseServiceConfig.getLatestChainIndex(this.userEmail).then(val=>{
      console.log("VAL:"+val)
    });
  }
}
