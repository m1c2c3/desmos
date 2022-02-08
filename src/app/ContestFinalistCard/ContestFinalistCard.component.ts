import { Component, Input } from "@angular/core";

@Component({

    selector: 'desmos-ContestFinalistCard',
    templateUrl: 'ContestFinalistCard.component.html'

})

export class ContestFinalistCard{
@Input() img: string;
@Input() title: string;
@Input() location: string;
@Input() artist: string;

constructor(){
    this.img = "";
    this.location = "Unkown Location";
    this.title = "No Title";
    this.artist = "Unknown"

}

    
}

