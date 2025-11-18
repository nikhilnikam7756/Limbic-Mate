import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterChainModel } from 'src/app/models/MasterChainModel';
import { FirebaseConfigService } from 'src/app/services/firebase-config.service';

@Component({
  selector: 'app-master-block-chain-list',
  templateUrl: './master-block-chain-list.component.html',
  styleUrls: ['./master-block-chain-list.component.css']
})
export class MasterBLockChainListComponent implements OnInit {
  masterChainList: MasterChainModel[] = [];
  constructor(public firebaseConfigService:FirebaseConfigService,private router: Router,    private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getMasterChainList();
    }


  getMasterChainList(){
    this.firebaseConfigService.getMasterBlockChain().subscribe(
      (actionArray: any[]) =>{
        this.masterChainList = actionArray.map((item: any) =>{
          var recvdData = JSON.parse(JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          console.log("Item:"+JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          return new MasterChainModel(
              recvdData['chainId'],
              recvdData['description'],
              recvdData['name'],
              recvdData['status'],
              recvdData['associatedTo'],

              
              
              );
            }
          );
      }
    );
  }

  navigateToChain(userEmail:string):void{
    console.log("Selected User:"+userEmail);
    this.router.navigate(['/auditIndividualUser'], { queryParams: {userEmail: userEmail}});
  }

  
}

