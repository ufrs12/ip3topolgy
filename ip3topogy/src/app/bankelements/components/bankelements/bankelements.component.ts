import { Component } from '@angular/core';
import { CbankService } from '../../services/cbank.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-bankelements',
  templateUrl: './bankelements.component.html',
  styleUrls: ['./bankelements.component.css']
})
export class BankelementsComponent{
  svg:SafeHtml;

  constructor(
    public cbankService: CbankService,
    private sanitizer: DomSanitizer) {}

  Sanitar(s:string){
    this.svg = this.sanitizer.bypassSecurityTrustHtml(s);
    return this.svg;
  }
}