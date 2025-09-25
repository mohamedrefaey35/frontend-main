import { Component, OnInit } from '@angular/core';
// translate
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
// appsetting json 
import { AppsettingService } from './_services/appsetting.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shell';
  public textDir: string = 'ltr';
  
  constructor( private fb: FormBuilder, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService, private AppsettingService: AppsettingService) { 

    // appsetting
    console.log('appsetting', AppsettingService.config);

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
  ngOnInit(): void {
   
  }
  onSubmit(values) {
    console.log(values);
  }


  //+


}
