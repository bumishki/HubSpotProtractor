import {browser, $, $$, element, by, ExpectedConditions as ES, protractor} from 'protractor'
import {ContactsMenu} from "./ContactsMenu";
import {AccountMenu} from "./AccountMenu";
import {Helpers} from "../../utils/Helpers";


export class NavigationBar {
    helpers = new Helpers();
    contactsMenu = $("#nav-primary-contacts-branch");
    accountMenu = $("#account-menu");
    accountName = $(".account-name ");

    openContactsMenu() {
        this.helpers.waitElementToBeClickable(this.contactsMenu);
        this.contactsMenu.click();
        return new ContactsMenu();
    }

    openAccountMenu() {
        this.helpers.waitElementToBeClickable(this.accountMenu);
        this.accountMenu.click();
        return new AccountMenu();
    }

    getAccountName() {
        this.helpers.waitPresenceOfElement(this.accountName);
        return this.accountName.getAttribute('textContent');
    }

}