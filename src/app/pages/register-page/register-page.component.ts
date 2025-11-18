import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FirebaseConfigService } from './../../services/firebase-config.service';
import { format } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,public authService:AuthService,public firebaseConfigService:FirebaseConfigService) { }
  selectedOption: string = "Music";
  ngOnInit(): void {
  }
  
  email: string = "";
  password: string = "";
  phone: string = "";
  name: string = "";
  
  
  async register(){
    console.log("Registering user");
    var registrationMap = {};
    const dateStr = '2023-05-27T10:30:00';
    const formattedDate = format(new Date(dateStr), 'dd-MM-yyyy HH:mm:ss');
    console.log(formattedDate);
    
    registrationMap = {
      "email":this.email,
      "phone":this.phone,
      "name":this.name,
      "password":this.password,
      "chainIsVerified":false,
      "log": ["==== LOG CREATED ====",formattedDate+"User Created! Started Logging."]
    };
  

    this.authService.SignUp(this.email,this.password).then((val)=>{
      console.log("Sign up called.");
        this.firebaseConfigService.registerUserInDb(registrationMap)
    });
    
  }

}
