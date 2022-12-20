import {Component, Input} from '@angular/core';
import {MagazinesService} from "../magazines.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-magazine-header',
  templateUrl: './magazine-header.component.html',
  styleUrls: ['./magazine-header.component.scss']
})
export class MagazineHeaderComponent {
  @Input()
  public magazineName?: string;
  public magazinePhotoUrl?: string;

  constructor(private magazinesService: MagazinesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.magazinesService.getMagazines();
      this.magazinesService.data.subscribe(data => {
        this.magazinePhotoUrl = data.photos.find(val => val.forTitle === this.magazineName)?.url;
      });
    })
  }
}
