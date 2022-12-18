import {Component, Input, OnInit} from '@angular/core';
import {MagazinesService} from "../magazines.service";
import {MagazinesServiceOutput} from "../types/MagazinesServiceOutput";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  public library?: MagazinesServiceOutput = this.magazinesService.getMagazines();
  constructor(private magazinesService: MagazinesService) {}
}
