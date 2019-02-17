import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {CompaniesPage} from "../pages/CompaniesPage";
import {CompanyInfoPage} from "../pages/CompanyInfoPage";
import {AssociateContactsWithCompany} from "../pages/elements/AssociateContactsWithCompany";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user able to associate contact with company: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openCompaniesPage();

            new CompaniesPage()
                .openCompanyByName(data.companyName);

            let companyInfoPage = new CompanyInfoPage();
            companyInfoPage.addContactToCompany();

            new AssociateContactsWithCompany()
                .searchContactByName(data.contactFirstName + " " + data.contactLastName)
                .selectFindedClient()
                .associateContact();

            expect<any>(companyInfoPage.contact.getText()).toEqual(data.contactFirstName + " " + data.contactLastName);
        })
    })
})


