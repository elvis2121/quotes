import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  public vote = 0;
  public vote2 = 0;
  

  constructor() { }

  ngOnInit() {
  }
  upVote(vote){
    this.vote+=1
    console.log(vote)
  }

  downVote(vote2){
    this.vote2-=1
    
  }

  

}
