import {$, browser, Key} from "protractor";
import {BasePage} from "./BasePage";
import {ActionsMenu} from "./elements/ActionsMenu";
import {Helpers} from "../utils/Helpers";

export class ContactInfoPage extends BasePage {
    helpers = new Helpers();

    contactName = $("[class='highlightTitleWidthMeasurementWrapper'] [class=\"private-truncated-string__inner\"]>span");
    actionsMenuButton = $("button[data-selenium-test='profile-settings-actions-btn']");
    email = $("form[data-selenium-test='profile-properties'] div[class='p-x-0 col-xs-12 '] > div");
    emailTextBox = $("[name='textInput']");
    saveEmailButton = $("button[class='uiButton private-button private-button--xs private-button--tertiary private-editable-control__save private-button--non-link']");
    exitEmailPopupButton = $("div[aria-label='Close']");

    openActionsMenu() {
        this.helpers.waitElementToBeClickable(this.actionsMenuButton);
        this.actionsMenuButton.click();
        return new ActionsMenu();
    }

    changeContactEmailTo(newEmail: string) {
        this.helpers.waitElementToBeClickable(this.email);
        this.email.click();
        this.emailTextBox.sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.BACK_SPACE);
        this.emailTextBox.sendKeys(newEmail);
        this.saveEmailButton.click();
        this.exitEmailPopupButton.click();
        browser.sleep(2000);
        return this;
    }

    getContactEmail() {
        this.helpers.waitPresenceOfElement(this.email);
        return this.email.getText();
    }

    getContactName() {
        this.helpers.waitPresenceOfElement(this.contactName);
        return this.contactName.getText();
    }


}