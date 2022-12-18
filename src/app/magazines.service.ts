import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {MagazineIssue} from "./types/MagazineIssue";
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxXmlToJsonService } from "ngx-xml-to-json";
import {Photo} from "./types/Photo";
import { Issues } from "./types/Issues";
import { Magazine } from './types/Magazine';
import { MagazinesServiceOutput } from "./types/MagazinesServiceOutput";

@Injectable({
  providedIn: 'root'
})
export class MagazinesService {
  constructor(private httpClient: HttpClient, private ngxXmlToJsonService: NgxXmlToJsonService) { }
  public getMagazines(): MagazinesServiceOutput {
    const photos: Photo[] = [];
    const issues: Issues[] = [];
    const magazines: Magazine[] = [];
    const params = new HttpParams().set('Content-Type', 'application/xml').set('Access-Control-Allow-Origin', '*');
    this.httpClient.get('https://proxy.cors.sh/https://mendela.pl/3web/czasopisma.xml', {params}).subscribe((data) => {
      console.log(data);
      return { photos: [], issues: [], magazines: [] };
    }, (error) => {
      const options = {
        textKey: 'text',
        attrKey: 'attr',
        cdataKey: 'cdata',
      };
      const json = this.ngxXmlToJsonService.xmlToJson(error.error.text, options);
      for (const name in json.czasopisma.zmienne) {
        if (name !== 'text') {
          const photoObj: Photo = {
            forTitle: name,
            url: `http://atarionline.pl/biblioteka/czasopisma/img/${json.czasopisma.zmienne[name].src.text}`,
          }
          const issueArr = json.czasopisma.lata[name].text.split(',');
          const issuesObj: Issues = {
            forTitle: name,
            issues: issueArr,
          }
          const magazineObj: Magazine = {
            title: name,
            magazineIssues: [],
          };
          for (const issueName in json.czasopisma[name]) {
            if (issueName !== 'text') {
              const tmp = json.czasopisma[name][issueName];
              const magazineIssueObj: MagazineIssue = {
                id: tmp.numer && tmp.numer.text,
                issue: tmp.attr.rok,
                title: tmp.nazwa && tmp.nazwa.text,
                publisher: tmp.wydawca && tmp.wydawca.text,
                format: tmp.format && tmp.format.text,
                pageCount: tmp.stron && tmp.stron.text,
                coverUrl: tmp.miniaturka && tmp.miniaturka.text,
                fileUrl: tmp.plik && tmp.plik.text,
                scan: tmp.skan && tmp.skan.text,
                processing: tmp.przetworzenie && tmp.przetworzenie.text,
                sender: tmp.podeslal && tmp.podeslal.text,
              }
              magazineObj.magazineIssues.push(magazineIssueObj);
            }
          }
          magazines.push(magazineObj);
          photos.push(photoObj);
          issues.push(issuesObj);
        }
      }
    });
    return { photos, issues, magazines };
  }
}
