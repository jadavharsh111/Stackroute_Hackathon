import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  msg = '';
  nCnt = 0;
  check = false;

  constructor() { }

  ngOnInit() {
  }

// Click function to open game
  onclick(): void {
        this.check = true;
        this.nCnt = this.nCnt + 1;
        this.msg = 'Clicked: ' + this.nCnt;

  }

}
