import { Component, OnInit } from '@angular/core';
import { FirebaseConfigService } from './../../services/firebase-config.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  filesList = [];
  constructor(public firebaseConfigService:FirebaseConfigService,public log:LoggingService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.firebaseConfigService.getUserEmail()
  }


}
