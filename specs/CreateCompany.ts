import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {CompaniesPage} from "../pages/CompaniesPage";
import {CompanyInfoPage} from "../pages/CompanyInfoPage";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user create new company: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openCompaniesPage();

            new CompaniesPage()
                .addNewCompany()
                .enterCompanyDomainName(data.companyDomainName)
                .enterName(data.companyName)
                .createCompany();

            expect<any>(new CompanyInfoPage().getCompanyName()).toEqual(data.companyName);
        })
    })
})


