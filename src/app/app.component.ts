import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.authService.isAuthenticated = document.cookie.split('=')[1] === 'true';
  }
  public handleRouteChange() {
    if (!this.authService.isAuthenticated) {
      this.router.navigateByUrl('/');
    }
  }
}
