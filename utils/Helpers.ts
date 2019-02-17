import {browser, $, $$, element, by, ExpectedConditions as ES, protractor, ElementFinder} from 'protractor'

export class Helpers {

    EC = protractor.ExpectedConditions;

    waitPresenceOfElement(element: ElementFinder) {
        browser.wait(this.EC.presenceOf(element), 5000, "waiter");
    }


    waitElementToBeClickable(element: ElementFinder) {
        browser.wait(this.EC.elementToBeClickable(element), 9000, "waiter");
    }

    waitVisibilityOf(element: ElementFinder) {
        browser.wait(this.EC.visibilityOf(element), 9000);
    }
}