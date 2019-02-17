import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {CompaniesPage} from "../pages/CompaniesPage";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should new company presents at Companies list: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openCompaniesPage();

            new CompaniesPage().companiesList.getText().then(function (companiesList) {
                expect(companiesList.includes(data.companyName)).toBe(true)
            });
        })
    })
})