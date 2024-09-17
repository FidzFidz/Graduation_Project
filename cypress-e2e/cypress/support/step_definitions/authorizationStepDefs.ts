import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AuthorizationLocators from "../../e2e/locators/authorizationLocators";
import AuthorizationModel from "../../e2e/model/authorizarionModel";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";
import { emit, emitWarning } from "process";

// Authorization admins test cases

Given("admin navigate to the index page", () => {
    AuthorizationPO.getInstance().navigate();
});

When("admin sees the manage tags on his dashboard with email {string} and password {string}", (email: string, password: string) => {
    const loginData: AuthorizationModel = {
        email: email,
        password: password
    };
    AuthorizationPO.getInstance().login_tag(loginData);

});

When("admin can check manage tags URL with email {string} and password {string}", (email: string, password: string) => {
    const loginData: AuthorizationModel = {
        email: email,
        password: password
    };
    AuthorizationPO.getInstance().url_tag(loginData);

});

When("admin can access any content in the manage tags page with email {string} and password {string}", (email: string, password: string) => {
    const loginData: AuthorizationModel = {
        email: email,
        password: password
    };
    AuthorizationPO.getInstance().content_tag(loginData);

});


// Authorization Memebrs test cases 

Given("members navigate to the index page", () => {
    AuthorizationPO.getInstance().navigate();
});

When("user tries to access the manage tags URL with email {string} and password {string}", (email: string, password: string) => {
    const loginData: AuthorizationModel = {
        email: email,
        password: password
    };
    AuthorizationPO.getInstance().member_tag(loginData);

});