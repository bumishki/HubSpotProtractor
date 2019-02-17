import {$, browser, by, element, Key} from "protractor";
import {CompanyInfoPage} from "./CompanyInfoPage";
import {Helpers} from "../utils/Helpers";

export class CompaniesPage {
    helpers = new Helpers();

    createNewCompanyButton = $("button[data-selenium-test='new-object-button']");
    companyDomainNameTextBox = $("input[data-selenium-test='property-input-domain']");
    nameTextBox = $("input[data-selenium-test='property-input-name']");
    companyOwner = $(".private-dropdown__item__label");
    createCompanyButton = $("button[data-selenium-test='base-dialog-confirm-btn']");
    companiesList = element.all(by.xpath("//table/tbody//td[2]//span//a//span/span/span"));
    companiesTable = $("div[data-selenium-test='DataGridContainer__grid-table']");
    tableElements = $(".private-truncated-string__inner");


    addNewCompany() {
        this.helpers.waitElementToBeClickable(this.createNewCompanyButton);
        this.createNewCompanyButton.click();
        return this;
    }

    enterCompanyDomainName(companyDomainName: string) {
        this.helpers.waitPresenceOfElement(this.companyDomainNameTextBox);
        this.companyDomainNameTextBox.sendKeys(companyDomainName);
        browser.sleep(1000);
        return this;
    }

    enterName(companyName: string) {
        this.helpers.waitElementToBeClickable(this.companyOwner);
        this.nameTextBox.sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.BACK_SPACE);
        this.nameTextBox.sendKeys(companyName);
        return this;
    }

    createCompany() {
        this.helpers.waitElementToBeClickable(this.createCompanyButton);
        this.createCompanyButton.click();
        return new CompanyInfoPage();
    }

    openCompanyByName(companyName: string) {
        this.helpers.waitPresenceOfElement(this.tableElements);
        element(by.cssContainingText(".private-truncated-string__inner", companyName)).click();
    return new CompanyInfoPage();
}

}