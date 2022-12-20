import {Component, Input} from '@angular/core';
import {Photo} from "../types/Photo";

@Component({
  selector: 'app-magazine-lin',
  templateUrl: './magazine-lin.component.html',
  styleUrls: ['./magazine-lin.component.scss']
})
export class MagazineLinComponent {
  @Input()
  public photo?: Photo;
}
