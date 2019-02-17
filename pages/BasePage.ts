import {browser, $, $$, element, by, ExpectedConditions as ES, protractor, ElementFinder} from 'protractor'

export class BasePage {

    getPageTitle() {
        return browser.getTitle()
    }
}