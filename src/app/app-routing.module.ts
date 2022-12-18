import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SecretPasswordComponent} from "./secret-password/secret-password.component";
import {LibraryComponent} from "./library/library.component";
import {MagazineComponent} from "./magazine/magazine.component";
import {IssueSetComponent} from "./issue-set/issue-set.component";
import {IssueComponent} from "./issue/issue.component";

const routes: Routes = [
  { path: '', component: SecretPasswordComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'library/:name', component: MagazineComponent },
  { path: 'library/:name/:issueDate', component: IssueSetComponent },
  { path: 'library/:name/:issueDate/:issueNumber', component: IssueComponent },
  { path: '**', redirectTo: 'library' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
