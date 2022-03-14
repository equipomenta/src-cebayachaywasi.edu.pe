import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "gallery-suizo-webpage",
    templateUrl: "./gallery.component.html",
    styleUrls: ["./gallery.component.css"]
})
export class GallerySuizoWebPageComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}