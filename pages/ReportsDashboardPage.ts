import {browser, $, $$, element, by, ExpectedConditions as ES, protractor} from 'protractor'
import {NavigationBar} from "./elements/NavigationBar";
import {BasePage} from "./BasePage";
import {userData} from "../data/userData";

export class ReportsDashboardPage extends NavigationBar {
    EC = protractor.ExpectedConditions;

/*    constructor(){
        super();
        browser.get(userData.url);
    }*/

}