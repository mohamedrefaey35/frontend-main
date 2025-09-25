import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsettingService {

   config: AppsettingService | any ;
    constructor(private http: HttpClient) {}
    loadConfig() {
    return this.http
        .get<AppsettingService>('./assets/appsetting.json')
        .toPromise()
        .then(config => {
        this.config = config;
        });
    }
}
