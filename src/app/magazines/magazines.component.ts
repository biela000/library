import {Component, Input} from '@angular/core';
import {Photo} from "../types/Photo";

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.scss']
})
export class MagazinesComponent {
  @Input()
  public photos?: Photo[];

}
