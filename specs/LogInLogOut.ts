import {userData} from "../data/userData";
import {LogInPage} from "../pages/LogInPage";
import {ReportsDashboardPage} from "../pages/ReportsDashboardPage";

describe("Hub Spot Smoke Suite", () => {

    it("Should user logout from Hub Spote", () => {

        new ReportsDashboardPage()
            .openAccountMenu()
            .clickSignOutButton();

        expect<any>(new LogInPage().getPageTitle()).toEqual("HubSpot Login");
    })

    it("Should user login to Hub Spote", () => {

        new LogInPage()
            .enterEmail(userData.email)
            .enterPassword(userData.password)
            .clickLogInButton();

        expect<any>(new ReportsDashboardPage().getAccountName()).toEqual("Test Company");
    })
})