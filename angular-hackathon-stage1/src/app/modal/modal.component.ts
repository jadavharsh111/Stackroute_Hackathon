import { Http, Headers } from '@angular/http';
import { AppComponent } from './../app.component';
import { Data } from './../data';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    headers: any;
 datacomp: Data [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  postData() {
    console.log('hi');
 const j = JSON.stringify({name: 'abhijith', emailId: 'abhi@gmail.com',
   projectId: '123', location: 'bangalore', gitURL: 'Abhi58'});
   this.http.post('http://172.23.238.209:8080/hackathon', j, {headers: this.headers})
   .subscribe(response =>
   console.log(response.json()))
   ;
}




}
