import { Component, OnInit } from "@angular/core";
import { ContestService } from "../ContestFinalistCard/Contest.service";
import { ContestFinalistCardModel } from "../ContestFinalistCard/ContestFinalistCard.model";

@Component({
selector: 'desmos-home-layout',
templateUrl: 'home-layout.component.html',
styleUrls: ['home-layout.component.css']

})

export class HomeLayoutComponent implements OnInit{
    contests: ContestFinalistCardModel [] =[]

    constructor(private contestService:ContestService){

        
    }

    ngOnInit(): void {
        this.contestService.getContest().subscribe(data =>{
            console.log("Fetching contest data");
            for (var contest of data) {
                console.log(this.contests)
                this.contests.push(contest);
            }
        })
    }
}

