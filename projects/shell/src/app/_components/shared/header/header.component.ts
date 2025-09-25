import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// translate
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public textDir: string = 'ltr';
  declare $ : any;
  // lang
  lang: any;

  constructor(private router: Router, private route: ActivatedRoute, public translate: TranslateService) {
    // Lang 2
    this.lang = localStorage.getItem('lang');

    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    // direction 
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'ar')
      { this.textDir = 'rtl'; } 
      else {this.textDir = 'ltr';}
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    $(".sidebar-btn").click(function(){
      $(".wrapper").toggleClass("collapse");
  });
  }

}
