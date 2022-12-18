import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SecretPasswordComponent } from './secret-password/secret-password.component';
import { SecretPasswordInputComponent } from './secret-password-input/secret-password-input.component';
import { SecretPasswordOutputComponent } from './secret-password-output/secret-password-output.component';
import { SecretPasswordDateComponent } from './secret-password-date/secret-password-date.component';
import { AppRoutingModule } from './app-routing.module';
import { LibraryComponent } from './library/library.component';
import { MagazineComponent } from './magazine/magazine.component';
import { IssueSetComponent } from './issue-set/issue-set.component';
import { IssueComponent } from './issue/issue.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MagazinesComponent } from './magazines/magazines.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretPasswordComponent,
    SecretPasswordInputComponent,
    SecretPasswordOutputComponent,
    SecretPasswordDateComponent,
    LibraryComponent,
    MagazineComponent,
    IssueSetComponent,
    IssueComponent,
    SearchBarComponent,
    MagazinesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
