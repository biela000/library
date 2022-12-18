import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-secret-password-input',
  templateUrl: './secret-password-input.component.html',
  styleUrls: ['./secret-password-input.component.scss']
})
export class SecretPasswordInputComponent implements OnInit {
  @Input() public earnings?: string;
  @Output() public earningsChange = new EventEmitter<string>();
  public earningsCopy: string = '';
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
  }
}
