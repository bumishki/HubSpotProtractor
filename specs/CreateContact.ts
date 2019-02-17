import {testData} from "../data/testData";
import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {ContactInfoPage} from "../pages/ContactInfoPage";
import {ContactsPage} from "../pages/ContactsPage";
const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user create new contact: " + description , () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openContactsPage();

            new ContactsPage()
                .addNewContact()
                .enterEmail(data.contactEmail)
                .enterFirstName(data.contactFirstName)
                .enterLastName(data.contactLastName)
                .enterJobTitle(data.contactJobTitle)
                .createContact();

            expect<any>(new ContactInfoPage().getContactName()).toEqual(data.contactFirstName + " " + data.contactLastName);
        })
    })
})


