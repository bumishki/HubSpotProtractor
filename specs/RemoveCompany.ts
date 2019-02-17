import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {CompaniesPage} from "../pages/CompaniesPage";
import {CompanyInfoPage} from "../pages/CompanyInfoPage";
import {testData} from "../data/testData";
const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user able to remove company: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openCompaniesPage();

            let companiesPage = new CompaniesPage();
            companiesPage
                .openCompanyByName(data.companyName);

            new CompanyInfoPage()
                .openActionsMenu()
                .pressDelete()
                .confirmDeleteCompanie();

            companiesPage.companiesList.getText().then(function (companiesList) {
                expect(companiesList.includes(data.companyName)).toBe(false)
            });
        })
    })
})


