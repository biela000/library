import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-password-date',
  templateUrl: './secret-password-date.component.html',
  styleUrls: ['./secret-password-date.component.scss']
})
export class SecretPasswordDateComponent implements OnInit {
  public date: number = Date.now();

  ngOnInit() {
    setInterval(() => {
      this.date = Date.now();
    }, 300);
  }
}
