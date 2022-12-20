import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-secret-password-input',
  templateUrl: './secret-password-input.component.html',
  styleUrls: ['./secret-password-input.component.scss']
})
export class SecretPasswordInputComponent implements OnInit {
  @Input() public earnings?: string;
  @Output() public earningsChange = new EventEmitter<string>();
  public earningsCopy: string = '';
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.earningsCopy = this.earnings || '';
  }
  public handleEarningsChange(event: KeyboardEvent): void {
    event.preventDefault();
    if (/^\d$/.test(event.key)) this.earningsCopy += event.key;
    else if (/^\.$/.test(event.key) && this.earningsCopy.indexOf('.') === -1 && this.earningsCopy.length > 0) this.earningsCopy += event.key;
    this.earningsChange.emit(this.earningsCopy);
  }

  public handleKeyUp(): void {
    this.earningsChange.emit(this.earningsCopy);
    if (this.earnings === '666.666') {
      this.authService.setIsAuthenticated(true);
      this.router.navigateByUrl('/library');
    }
  }
}
