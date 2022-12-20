import { Component } from '@angular/core';
import {MagazinesService} from "../magazines.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MagazineIssue} from "../types/MagazineIssue";

@Component({
  selector: 'app-issue-set',
  templateUrl: './issue-set.component.html',
  styleUrls: ['./issue-set.component.scss']
})
export class IssueSetComponent {
  public magazineIssues: any;
  constructor(private magazineService: MagazinesService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(element => {
      const splitted = this.router.url.split('/');
      const magSubj = this.magazineService.getMagazine(splitted[splitted.length - 2]);
      this.magazineService.getMagazines();
      magSubj.subscribe(val => {
        const formattedYear = decodeURI(splitted[splitted.length - 1]);
        this.magazineIssues = val.magazineIssues.filter((issue: MagazineIssue) => issue.issue === formattedYear);
        if (this.magazineIssues.length === 0) {
          this.router.navigateByUrl('/library');
          magSubj.unsubscribe();
        }
      })
    });
  }
}
