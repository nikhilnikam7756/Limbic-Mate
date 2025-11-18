import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { FirebaseConfigService } from 'src/app/services/firebase-config.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(public firebaseConfigService:FirebaseConfigService) { }
  


  ngOnInit(): void {
    // this.getUsersList();
  }

  


}


