import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
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

  

}
