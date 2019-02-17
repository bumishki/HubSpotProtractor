import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {CompaniesPage} from "../pages/CompaniesPage";
import {CompanyInfoPage} from "../pages/CompanyInfoPage";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
    it("Should user add city to Company: " + description, () => {

        new ReportsDashboardPage()
            .openContactsMenu()
            .openCompaniesPage();

        new CompaniesPage()
            .openCompanyByName(data.companyName);

        let companyInfoPage = new CompanyInfoPage();
        companyInfoPage.changeCompanyCity(data.companyCity);

        expect<any>(companyInfoPage.getCompanyCity()).toEqual(data.companyCity);
    })
})
})


