import {browser, $, $$, element, by, ExpectedConditions as ES, protractor} from 'protractor'
import {ReportsDashboardPage} from "./ReportsDashboardPage";
import {BasePage} from "./BasePage";
import {Helpers} from "../utils/Helpers";
import {userData} from "../data/userData";

export class LogInPage extends BasePage{
    helpers = new Helpers();

    emailTextBox = $("#username");
    passwordTextBox = $("#password");
    logInButton = $("#loginBtn");

    constructor(){
        super();
        browser.get(userData.url);
    }

    logInAs(email: string, password: string) {

        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogInButton();
    }

    enterEmail(email: string) {
        this.helpers.waitPresenceOfElement(this.emailTextBox);
        this.emailTextBox.sendKeys(email);
        return this
    }

    enterPassword(password: string) {
        this.helpers.waitPresenceOfElement(this.passwordTextBox);
        this.passwordTextBox.sendKeys(password);
        return this
    }

    clickLogInButton() {
        this.helpers.waitElementToBeClickable(this.logInButton);
        this.logInButton.click();
        return new ReportsDashboardPage();
    }

}