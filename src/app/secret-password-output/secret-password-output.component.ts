import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-secret-password-output',
  templateUrl: './secret-password-output.component.html',
  styleUrls: ['./secret-password-output.component.scss']
})
export class SecretPasswordOutputComponent {
  @Input() public earnings?: string;
}
