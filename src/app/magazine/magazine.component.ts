import { Component } from '@angular/core';
import {MagazinesServiceOutput} from "../types/MagazinesServiceOutput";
import {MagazinesService} from "../magazines.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent {
  public magazine?: any;
  constructor(private magazinesService: MagazinesService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(element => {
      const splitted = this.router.url.split('/');
      this.magazinesService.getMagazines();
      const subjMag = this.magazinesService.getMagazine(splitted[splitted.length - 1]);
      subjMag.subscribe(val => {
        this.magazine = val;
        if (!val) {
          this.router.navigateByUrl('/library');
          subjMag.unsubscribe();
        }
      });
    });
  }
}
