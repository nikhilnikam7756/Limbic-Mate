import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FirebaseConfigService } from './services/firebase-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audit_block_chain';

constructor(private firebaseConfigService: FirebaseConfigService,public authenticationService:AuthService,
  private route: ActivatedRoute,private router: Router
  ){
    this.router.navigate(['/loginPage'], { relativeTo: this.route });
}
}