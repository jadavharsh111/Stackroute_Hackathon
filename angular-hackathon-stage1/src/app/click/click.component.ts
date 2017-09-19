import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  check = false;

  constructor() { }

  ngOnInit() {
  }

// Click function to open game
  onclick(): void {
        this.check = true;


  }

}
