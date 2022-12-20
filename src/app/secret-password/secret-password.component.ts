import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-secret-password',
  templateUrl: './secret-password.component.html',
  styleUrls: ['./secret-password.component.scss']
})
export class SecretPasswordComponent implements OnInit {
  public earnings: string = '';
  public handleEarningsChange(earnings: string): void {
    this.earnings = earnings;
  }
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.setIsAuthenticated(false);
  }
}
