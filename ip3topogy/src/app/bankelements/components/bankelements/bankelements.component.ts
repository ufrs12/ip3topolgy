import { Component } from '@angular/core';
import { CbankService } from '../../services/cbank.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Elem } from '../../models/element';

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

  Sanitar(s:Elem){
    this.svg = this.sanitizer.bypassSecurityTrustHtml(s.svg + Elem.getText1(s));
    return this.svg;
  }
}