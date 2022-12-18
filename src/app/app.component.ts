import {Component} from '@angular/core';
import {MagazinesService} from "./magazines.service";
import {MagazinesServiceOutput} from "./types/MagazinesServiceOutput";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public library: MagazinesServiceOutput = this.magazinesService.getMagazines();
  constructor(private magazinesService: MagazinesService) { }
}
