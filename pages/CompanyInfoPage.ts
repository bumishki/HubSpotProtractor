import {BasePage} from "./BasePage";
import {$, browser, by, element, Key, protractor} from "protractor";
import {ActionsMenu} from "./elements/ActionsMenu";
import {AssociateContactsWithCompany} from "./elements/AssociateContactsWithCompany";
import {Helpers} from "../utils/Helpers";

export class CompanyInfoPage extends BasePage {
    helpers = new Helpers();

    companyName = $("[class='highlightTitleWidthMeasurementWrapper'] [class=\"private-truncated-string__inner\"]>span");
    actionsMenuButton = $("button[data-selenium-test='profile-settings-actions-btn']");
    cityTextBox = $("input[data-selenium-test='property-input-city']");
    addContuctButton = $("[class='uiButton private-button private-button--sm private-button--tertiary-light private-button--non-link']");
    contact = $("[class='m-bottom-1 is--heading-7']");
    saveChangesButton = $("[data-key='customerDataProperties.UniversalSaveBar.save']");

    createTaskButton = $("a[data-tab-id='task']");
    taskTitleInputTextBox = $("input[data-selenium-test='communicator__task-title-input']");
    taskNotesInputTextBox = $("");
    saveTaskButton = $("button[data-selenium-test='task-interaction__save-btn']");
    tasksList = element.all(by.xpath("//div[@class='is--module private-card private-card__wrapper private-card--compact namespaced-hack-section UISection__ScrollWrapper-eQImbY jpCPEv']//span[@data-selenium-test='communicator__task-title-readonly']/span/span"));
    taskNotes = $("");


    openActionsMenu() {
        this.helpers.waitElementToBeClickable(this.actionsMenuButton);
        this.actionsMenuButton.click();
        return new ActionsMenu();
    }

    changeCompanyCity(newCity: string) {
        this.helpers.waitPresenceOfElement(this.cityTextBox);
        this.cityTextBox.sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.BACK_SPACE);
        this.cityTextBox.sendKeys(newCity);
        this.saveChangesButton.click();
        browser.sleep(2000);
        return this;
    }

    getCompanyCity() {
        this.helpers.waitPresenceOfElement(this.cityTextBox);
        return this.cityTextBox.getAttribute("value");
    }

    addTask(taskName: string) {
        this.helpers.waitElementToBeClickable(this.createTaskButton);
        this.createTaskButton.click();
        this.taskTitleInputTextBox.sendKeys(taskName);
        this.saveTaskButton.click();
        browser.sleep(2000);
        return this;
    }

    getTask() {

        return this.tasksList;
    }

    addContactToCompany() {
        this.helpers.waitElementToBeClickable(this.addContuctButton);
        this.addContuctButton.click();

        return new AssociateContactsWithCompany();
    }

    getCompanyName() {
        this.helpers.waitPresenceOfElement(this.companyName);
        return this.companyName.getText();
    }
}