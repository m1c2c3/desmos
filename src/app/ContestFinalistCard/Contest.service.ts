import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContestFinalistCardModel } from "./ContestFinalistCard.model";


@Injectable({
    providedIn: 'root'
})
export class ContestService {
    private baseUrl:string = "https://desmos-e521a-default-rtdb.firebaseio.com/";
    private contestEndpoints: string = "contest.json";

    constructor(private http:HttpClient) {



    }

    public getContest () {
        return this.http.get <ContestFinalistCardModel []>(this.baseUrl + this.contestEndpoints);


    }
}