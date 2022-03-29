import { Injectable } from "@angular/core";
import { ContestFinalistCardModel } from "./ContestFinalistCard.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})
export class ContestService {
     constructor(private db:AngularFireDatabase) {



    }

    public getContest () {
        return this.db.list<ContestFinalistCardModel>("contest").valueChanges();

    }

    addContest(contest :ContestFinalistCardModel){
        this.db.list<ContestFinalistCardModel>("contest").push(contest);
    }
}