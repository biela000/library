import { Component } from '@angular/core';

@Component({
  selector: 'app-secret-password',
  templateUrl: './secret-password.component.html',
  styleUrls: ['./secret-password.component.scss']
})
export class SecretPasswordComponent {
  public earnings: string = '';
  public handleEarningsChange(earnings: string): void {
    this.earnings = earnings;
  }
}
