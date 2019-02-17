import {browser, $, $$, element, by, ExpectedConditions as ES, protractor, ElementFinder} from 'protractor'

export class BasePage {
    EC = protractor.ExpectedConditions;

    getPageTitle() {
        return browser.getTitle()
    }
/*
    waitPresenceOfElement(element: ElementFinder) {
        browser.wait(this.EC.presenceOf(element), 10000, "waiter");
    }

    waitElementToBeClickable(element: ElementFinder) {
        browser.wait(this.EC.elementToBeClickable(element), 9000, "waiter");
    }*/
}