import {Component, Input, OnInit} from '@angular/core';
import {MagazinesService} from "../magazines.service";
import {MagazinesServiceOutput} from "../types/MagazinesServiceOutput";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public library?: MagazinesServiceOutput;
  constructor(private magazinesService: MagazinesService, private route: ActivatedRoute) {
    this.route.params.subscribe(val => {
      this.magazinesService.getMagazines();
      this.magazinesService.data.subscribe(data => {
        this.library = data;
      });
    });
  }
  ngOnInit() {

  }
}
