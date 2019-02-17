import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";
import {ContactsPage} from "../pages/ContactsPage";
import {ContactInfoPage} from "../pages/ContactInfoPage";
import {testData} from "../data/testData";

const using = require('jasmine-data-provider');

describe("Hub Spot Smoke Suite", () => {

    using(testData.datadriven, (data, description) => {
        it("Should user able to remove contact: " + description, () => {

            new ReportsDashboardPage()
                .openContactsMenu()
                .openContactsPage();

            let contactsPage = new ContactsPage();
            contactsPage
                .openContactByName(data.contactFirstName + " " + data.contactLastName);

            new ContactInfoPage()
                .openActionsMenu()
                .pressDelete()
                .confirmDeleteContact();

            contactsPage.contactsList.getText().then(function (contactsList) {
                expect(contactsList.includes(data.contactFirstName + " " + data.contactLastName)).toBe(false)
            });
        })
    })
})


