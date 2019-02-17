import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {ContactsPage} from "../pages/ContactsPage";
import {testData} from "../data/testData";
const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
    it("Should new contact presents at Contacts list: " + description, () => {

        new ReportsDashboardPage()
            .openContactsMenu()
            .openContactsPage();

        new ContactsPage().contactsList.getText().then(function (contactsList) {
            expect(contactsList.includes(data.contactFirstName + " " + data.contactLastName)).toBe(true)
        });
    })
    })
})


