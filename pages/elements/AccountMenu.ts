import {browser, $, $$, element, by, ExpectedConditions as ES, protractor} from 'protractor'
import {LogInPage} from "../LogInPage";
import {BasePage} from "../BasePage";

export class AccountMenu {
    signOut = $("#signout");

    clickSignOutButton() {
        //this.waitElementToBeClickable(this.signOut);
        this.signOut.click();
        return new LogInPage();
    }
}