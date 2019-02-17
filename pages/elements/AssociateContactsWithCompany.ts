import {$, by, element} from "protractor";
import {CompanyInfoPage} from "../CompanyInfoPage";
import {ContactInfoPage} from "../ContactInfoPage";
import {Helpers} from "../../utils/Helpers";


export class AssociateContactsWithCompany {
    helpers = new Helpers();

    searchContactTextBox = $("input[class='form-control private-form__control private-search-control__input']");
    searchResultsList = element.all(by.xpath("//*[@data-key='profileAssociateModal.contacts.name.hasEmail']"));
    saveButton = $("button[data-selenium-test='base-dialog-confirm-btn']");

    searchContactByName(name: string) {
        this.helpers.waitPresenceOfElement(this.searchContactTextBox);
        this.searchContactTextBox.sendKeys(name);
        return this;
    }

    selectFindedClient() {

        this.searchResultsList.get(0).click();
        return this;
    }

    associateContact() {
        this.helpers.waitElementToBeClickable(this.saveButton);
        this.saveButton.click();
        return new ContactInfoPage();
    }
}

