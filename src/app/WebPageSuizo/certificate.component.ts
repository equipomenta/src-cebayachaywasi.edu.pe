import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "contact-suizo-webpage",
    templateUrl: "./certificate.component.html",
    styleUrls: ["./certificate.component.css"]
})
export class CertificateSuizoWebPageComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}