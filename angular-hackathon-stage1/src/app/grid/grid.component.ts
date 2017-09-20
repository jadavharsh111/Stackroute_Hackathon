import { Http, Headers } from '@angular/http';
import { Component, OnInit, Attribute } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  div_selected: number;
  div_random: number;
  div_newBlank : number;
  ticks: number = 0;
  clicktime: number = -1;
  color4: string;

  color1: string;
  color2: string;
  color3: string;



  arr = [0,0,1,0];


myFunction():any{
    var d = new Date();
    var n = d.getMilliseconds();

  return n;
}



  //random generator function

  getRandomInt(min:number, max:number){

      return Math.floor(Math.random()*(max-min+1))+min;

  }


  getBlankDiv(value){

     // this.clicktime = currentTime()+1000;
        this.clicktime = this.myFunction();
      //selected div by user
      // this.div_selected = this.getRandomInt(1,4);
      this.div_selected = value;
      console.log('s '+this.div_selected);


      //random value generated between 1 to 3

      this.div_random = this.getRandomInt(1,3);

      console.log('r '+this.div_random);

      //final div to be displayed white

      this.div_newBlank = ((this.div_selected + this.div_random )  %4 );
      if(this.div_newBlank == 0)
          this.div_newBlank = 4;
      console.log('n '+this.div_newBlank);

     if(this.div_newBlank==1){
                  this.arr[0]=1;
                  this.arr[1]=0;
                  this.arr[2]=0;
                  this.arr[3]=0;
                  this.color1=value.srcElement.style['white'];
                  this.color2=value.srcElement.style['black'];
                  this.color3=value.srcElement.style['black'];
                  this.color4=value.srcElement.style['black'];
                }
      else if(this.div_newBlank==2){
        this.arr[0]=0;
        this.arr[1]=1;
        this.arr[2]=0;
        this.arr[3]=0;
        this.color1=value.srcElement.style['black'];
        this.color2=value.srcElement.style['white'];
        this.color3=value.srcElement.style['black'];
        this.color4=value.srcElement.style['black'];

                                    }
      else if(this.div_newBlank==3){
        this.arr[0]=0;
        this.arr[1]=0;
        this.arr[2]=1;
        this.arr[3]=0;
        this.color1=value.srcElement.style['black'];
        this.color2=value.srcElement.style['black'];
        this.color3=value.srcElement.style['white'];
        this.color4=value.srcElement.style['black'];
                                  }
     else if(this.div_newBlank==4){
      this.arr[0]=0;
      this.arr[1]=0;
      this.arr[2]=0;
      this.arr[3]=1;
      this.color1=value.srcElement.style['black'];
      this.color2=value.srcElement.style['black'];
      this.color3=value.srcElement.style['black'];
      this.color4=value.srcElement.style['white'];
                             }
      return this.div_newBlank;
  }

  constructor(){ }
  game(){


      let timer = Observable.timer(0,100);

      let sub = timer.subscribe(t=>{
          this.ticks = t;
       console.log(this.getBlankDiv(this.getRandomInt(1,4)));
       console.log('t'+t);

        if(t == this.clicktime || t == 1){
          console.log(this.getBlankDiv(this.getRandomInt(1,4)));
        }

       if(t==30){
          sub.unsubscribe();
          console.log('Time Out');
          }
      });




  }

}
