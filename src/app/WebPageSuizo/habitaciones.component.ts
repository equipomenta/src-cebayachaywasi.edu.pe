import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "habitaciones-suizo-webpage",
    templateUrl: "./habitaciones.component.html",
    styleUrls: ["./habitaciones.component.css"]
})
export class RoomsSuizoWebPageComponent {
    
    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}