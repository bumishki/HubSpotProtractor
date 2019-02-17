import {browser, Config} from 'protractor';
import {LogInPage} from "./pages/LogInPage";
import {userData} from "./data/userData";

export let config: Config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
    },

    //specs: ['specs/LogInLogOut.js'],
    suites: {
        smoke: [
            'specs/LogInLogOut.js',
            'specs/CreateContact.js',
            'specs/CreateCompany.js',
            'specs/ContactAtList.js',
            'specs/CompanyAtList.js',
            'specs/ChangeContactEmail.js',
            'specs/AssociateContactWithCompany.js',
            'specs/AddCityToCompany.js',
            'specs/AddTaskToCompany.js',
            'specs/RemoveCompany.js',
            'specs/RemoveContact.js'
        ]
    },

    jasmineNodeOpts: {
        showColors: true,
    },
    onPrepare: () => {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().window().maximize();

        beforeAll(() => {
            new LogInPage()
                .logInAs(userData.email, userData.password);
        })

    }
};