import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {ContactsPage} from "../pages/ContactsPage";
import {ContactInfoPage} from "../pages/ContactInfoPage";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user able to change email of contact: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openContactsPage();

            new ContactsPage()
                .openContactByName(data.contactFirstName + " " + data.contactLastName);

            let contactInfoPage = new ContactInfoPage();

            contactInfoPage
                .changeContactEmailTo(data.newContactEmail);

            expect<any>(contactInfoPage.getContactEmail()).toEqual(data.newContactEmail);
        });
    })
})


