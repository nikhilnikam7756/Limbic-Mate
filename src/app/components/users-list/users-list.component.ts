import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { FirebaseConfigService } from 'src/app/services/firebase-config.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public firebaseConfigService:FirebaseConfigService) { }
  usersList:UserModel[] = [];
 
  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this.firebaseConfigService.getUsers().subscribe(
      (actionArray: any[]) =>{
        this.usersList = actionArray.map((item: any) =>{
          var recvdData = JSON.parse(JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          console.log("Item:"+JSON.stringify(item,this.firebaseConfigService.getCircularReplacer() ));
          return new UserModel(
              recvdData['name'],
              recvdData['email'],
              recvdData['phone'],
              `${recvdData['name']}#${recvdData['email']}`,
              );
            }
          );
      });
      console.log("UsersList:"+this.usersList)
    }

}
