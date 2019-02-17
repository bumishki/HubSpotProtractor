import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {CompaniesPage} from "../pages/CompaniesPage";
import {CompanyInfoPage} from "../pages/CompanyInfoPage";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user add task to Company: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openCompaniesPage();

            new CompaniesPage()
                .openCompanyByName(data.companyName);

            let companyInfoPage = new CompanyInfoPage();
            companyInfoPage.addTask(data.companyTask);

            companyInfoPage.tasksList.getText().then(function (tasksList) {
                expect(tasksList.includes(data.companyTask)).toBe(true)
            });
        })
    })
})


