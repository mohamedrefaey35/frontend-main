import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/shared/header/header.component';
import { FooterComponent } from './_components/shared/footer/footer.component';
import { HomeComponent } from './_components/home/home.component';
import { ContactComponent } from './_components/contact/contact.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
// owl carousel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
// ng material 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './_models/material/material.module';
// datepicker
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './_components/datepicker/datepicker/datepicker.component';
import { DatepickergComponent } from './_components/datepicker/datepickerg/datepickerg.component';
import { DatepickerhComponent } from './_components/datepicker/datepickerh/datepickerh.component';
// share data
import { ParentComponent } from './_components/sharedata/parent/parent.component';
import { ChildComponent } from './_components/sharedata/child/child.component';
// upload
import { FileuploadComponent } from './_components/fileupload/fileupload.component';
// translate 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// appsetting.json
import { AppsettingService } from './_services/appsetting.service';
import {APP_INITIALIZER} from '@angular/core';

// appsetting json url 
export const configFactory = (configService: AppsettingService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    DatepickerComponent,
    DatepickergComponent,
    DatepickerhComponent,
    ParentComponent,
    ChildComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbModule,
    // translate
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: httpTranslateLoader, deps: [HttpClient] }
    }),
  ],
  providers: [
    // appsetting json 
    { provide: APP_INITIALIZER, useFactory: configFactory, deps: [AppsettingService], multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// translate aot compile
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
