import { Data } from './data';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostserviceService {

 private url: 'http://172.23.238.209:8080/hackathon';



  constructor(private http: Http) {}

  postData() {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.post(this.url, Data);
  }
}

