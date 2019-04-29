import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes' 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  saying = new Quotes
   public quote1:string
   public author1:string
   public submitter:string
   public date: Date
   public date2:Date
   public result: string[]
   public result1: string[]
   public result2: string[]
   


  

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(data){
    this.quote1 = data.quote
    this.author1 = data.author
    this.submitter = data.submittedby
    this.date = new Date
    


    this.result = [this.quote1]
    
    this.result1 = [this.author1]
    this.result2 = [this.submitter]      
            
    
  }
  

  
  
}
