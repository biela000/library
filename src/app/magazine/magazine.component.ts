import { Component, OnInit } from '@angular/core';
import {MagazinesServiceOutput} from "../types/MagazinesServiceOutput";
import {MagazinesService} from "../magazines.service";

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {
  public library: MagazinesServiceOutput = this.magazinesService.getMagazines();
  ngOnInit(): void {
    console.log(this.library.issues.length);
  }
  constructor(private magazinesService: MagazinesService) { }
}
