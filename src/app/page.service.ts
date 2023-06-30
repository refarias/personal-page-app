import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { FirstPage } from './firstPage';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) {}

  getFirstPage() :  Observable<FirstPage> {
    return this.http.get<FirstPage>(env.backend_url + "/page");
  }

}
