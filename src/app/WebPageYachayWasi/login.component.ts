import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "login-suizo-webpage",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginSuizoWebPageComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}