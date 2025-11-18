import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private readonly authService: AuthService, private readonly router: Router,private route: ActivatedRoute,) { }

  selectedOption: string = "Admin";

  ngOnInit(): void {
  }

  
  email:string = "";
  password:string = "";

  async login() {
    sessionStorage.clear();
    if(this.selectedOption == "Admin"){
      if(this.email == "admin@central.com" && this.password == "admin"){
        window.alert("Admin Logged in Successfully!");
        sessionStorage.setItem('user', "admin@auditBlock");
        this.router.navigate(['/adminHomePage'],{relativeTo: this.route});
      }
      else{
        window.alert("Invalid Admin credentials");
      }
    }
    else if(this.selectedOption == "Auditor"){
      if(this.email == "admin@admin" && this.password == "admin123"){
        window.alert("Auditor Logged in Successfully!");
        sessionStorage.setItem('user', "auditor@auditBlock");
        this.router.navigate(['/auditorHomePage'],{relativeTo: this.route});
      }
      else{
        window.alert("Invalid Auditor credentials");
      }
    }
    else{
      console.log("Logging in User");
      await this.authService.SignIn(this.email, this.password);
    }
    
    this.email = this.password = '';    
  }

  onSelectionChange() {
    console.log('Selected option:', this.selectedOption);
    // Perform additional logic here
  }

}
