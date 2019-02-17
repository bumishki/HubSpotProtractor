import {$, by, element} from "protractor";
import {ContactInfoPage} from "./ContactInfoPage";
import {CompanyInfoPage} from "./CompanyInfoPage";
import {NavigationBar} from "./elements/NavigationBar";
import {BasePage} from "./BasePage";
import {Helpers} from "../utils/Helpers";


export class ContactsPage {
    helpers = new Helpers();

    createNewContactButton = $("button[data-selenium-test='new-object-button']");
    emailTextBox = $("input[data-selenium-test='property-input-email']");
    firstNameTextBox = $("input[data-selenium-test='property-input-firstname']");
    lastNameTextBox = $("input[data-selenium-test='property-input-lastname']");
    jobTitleTextBox = $("input[data-selenium-test='property-input-jobtitle']");
    createContactButton = $("button[data-selenium-test='base-dialog-confirm-btn']");
    contactsList = element.all(by.xpath("//table/tbody//td[2]//span//a//span/span/span"));
    contactsTable = $("div[data-selenium-test='DataGridContainer__grid-table']");
    tableElements = $(".private-truncated-string__inner");

    addNewContact() {
        this.helpers.waitElementToBeClickable(this.createNewContactButton);
        this.createNewContactButton.click();
        return this;
    }

    enterEmail(email: string) {
        this.helpers.waitPresenceOfElement(this.emailTextBox);
        this.emailTextBox.sendKeys(email);
        return this;
    }

    enterFirstName(firstName: string) {
        this.helpers.waitElementToBeClickable(this.jobTitleTextBox);
        this.firstNameTextBox.sendKeys(firstName);
        return this;
    }

    enterLastName(LastName: string) {
        this.helpers.waitPresenceOfElement(this.lastNameTextBox);
        this.lastNameTextBox.sendKeys(LastName);
        return this;
    }

    enterJobTitle(jobTitle: string) {
        this.helpers.waitPresenceOfElement(this.jobTitleTextBox);
        this.jobTitleTextBox.sendKeys(jobTitle);
        return this;
    }

    createContact() {
        this.helpers.waitElementToBeClickable(this.createContactButton);
        this.createContactButton.click();
        return new ContactInfoPage();
    }

    openContactByName(contactName: string) {
        this.helpers.waitPresenceOfElement(this.tableElements);
        element(by.cssContainingText(".private-truncated-string__inner", contactName)).click();
        return new ContactInfoPage();

    }
}