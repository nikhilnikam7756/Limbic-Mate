import { Component, Input, OnInit } from '@angular/core';
import { UserChainModel } from 'src/app/models/UserChainModel';
import { FirebaseConfigService } from 'src/app/services/firebase-config.service';

@Component({
  selector: 'app-user-chain-list',
  templateUrl: './user-chain-list.component.html',
  styleUrls: ['./user-chain-list.component.css']
})
export class UserChainListComponent implements OnInit {

  constructor(public firebaseConfigService:FirebaseConfigService) { }
  userChainList:UserChainModel[]=[];
  @Input() userEmail: string = "";
  ngOnInit(): void {
    this.getUserChainList();
  }

  getUserChainList(){
    this.firebaseConfigService.getUserBlockChain(this.userEmail).subscribe(
      (actionArray: any[]) =>{
        this.userChainList = actionArray.map((item: any) =>{
          var recvdData = JSON.parse(JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          console.log("Item:"+JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          return new UserChainModel(
              recvdData['data'],
              recvdData['hash'],
              recvdData['nonce'],
              recvdData['prevHash'],
              recvdData['timestamp'],
              );
            }
          );
      }
    );
  }

}
