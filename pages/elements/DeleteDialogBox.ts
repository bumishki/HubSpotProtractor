import {$} from "protractor";
import {CompaniesPage} from "../CompaniesPage";
import {ContactsPage} from "../ContactsPage";
import {Helpers} from "../../utils/Helpers";

export class DeleteDialogBox {
    helpers = new Helpers();

deleteButton = $("button[data-selenium-test='delete-dialog-confirm-button']");

confirmDeleteCompanie() {
    this.helpers.waitElementToBeClickable(this.deleteButton);
        this.deleteButton.click();
        return new CompaniesPage();
    }

confirmDeleteContact() {
    this.helpers.waitElementToBeClickable(this.deleteButton);
        this.deleteButton.click();
        return new ContactsPage();
    }
}