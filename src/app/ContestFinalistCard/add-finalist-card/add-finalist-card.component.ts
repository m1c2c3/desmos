import { Component, OnInit } from '@angular/core';
import { ContestService } from '../Contest.service';
import { ContestFinalistCardModel } from '../ContestFinalistCard.model';

@Component({
  selector: 'fm-add-finalist-card',
  templateUrl: './add-finalist-card.component.html',
  styleUrls: ['./add-finalist-card.component.css']
})
export class AddFinalistCardComponent implements OnInit {

  constructor(public ps: ContestService) { }

  ngOnInit(): void {
  }

  addContestCard(contest : ContestFinalistCardModel) {
    this.ps.addContest(contest);
  }

}
