import {browser, $, $$, element, by, ExpectedConditions as ES, protractor} from 'protractor'

import {ContactsPage} from "../ContactsPage";
import {CompaniesPage} from "../CompaniesPage";
import {Helpers} from "../../utils/Helpers";


export class ContactsMenu {
    helpers = new Helpers();
    private contacts = $("#nav-secondary-contacts");
    private companies = $("#nav-secondary-companies");

    openContactsPage() {
        this.helpers.waitElementToBeClickable(this.contacts);
        this.contacts.click();
        return new ContactsPage();
    }

    openCompaniesPage() {
        this.helpers.waitElementToBeClickable(this.companies);
        this.companies.click();
        return new CompaniesPage();
    }
}
