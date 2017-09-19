import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';



@Component({
    selector: 'game-view',
    template:`
            
    `
    
  })

export class GameComponent{
    div_selected: number;
    div_random: number;
    div_newBlank : number;
    ticks: number = 0;
    
    arr = ['red','blue','green','black'];
   

    
    
    //random generator function
    
    getRandomInt(min:number, max:number){

        return Math.floor(Math.random()*(max-min+1))+min;

    }

    getBlankDiv(value){

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
        return this.div_newBlank;
    }
    
    constructor(){ }
    game(){
    
               
        let timer = Observable.timer(0,500);
        
        let sub = timer.subscribe(t=>{
            this.ticks = t;
         console.log(this.getBlankDiv(this.getRandomInt(1,4)));  
         console.log('t'+t);
        //    if(t/2==0.5)
         if(t==30){
            sub.unsubscribe();
            console.log('Time Out');
            }
        });
        

        
    
    }
    

}  

