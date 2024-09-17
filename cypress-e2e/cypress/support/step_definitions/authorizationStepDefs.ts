import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AuthorizationLocators from "../../e2e/locators/authorizationLocators";
import AuthorizationModel from "../../e2e/model/authorizarionModel";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";
import { emit, emitWarning } from "process";

// Authorization admins test cases

Given("admin navigate to the index page", () => {
    AuthorizationPO.getInstance().navigate();
});

When("admin clicks on the login", () => {
    AuthorizationPO.getInstance().login();
});


When("admin fills the email with email {string}", (email: string) => {
    AuthorizationPO.getInstance().fill_email(email);
});

When("admin fills the password with password {string}", (password: string) => {
    AuthorizationPO.getInstance().fill_password(password);
});

When("admin clicks on the login form", () => {
    AuthorizationPO.getInstance().click_login_button();
});

Then("admin sees the manage tags hyperlink", () => {
    AuthorizationPO.getInstance().check_manage_tags_hyperlink();
});

// Testing Scenario #2

When("admin clicks on the manage tags hyperlink", () => {
    AuthorizationPO.getInstance().click_manage_tags();
});

Then("admin sees the URL for the Tags", () => {
    AuthorizationPO.getInstance().manage_tag_url();
});

// Testing Scenario #3 

Then("admin can access the manage tags page", () => {
    AuthorizationPO.getInstance().manage_tag_url();
});

// Testing Scenario #4 

Given("user navigate to the index page", () => {
    AuthorizationPO.getInstance().navigate();
});

When("user clicks on the login", () => {
    AuthorizationPO.getInstance().login();
});


When("user fills the email with email {string}", (email: string) => {
    AuthorizationPO.getInstance().fill_email(email);
});

When("user fills the password with password {string}", (password: string) => {
    AuthorizationPO.getInstance().fill_password(password);
});

When("user clicks on the login form", () => {
    AuthorizationPO.getInstance().click_login_button();
});

Then("manage tags don't appear", () => {
    AuthorizationPO.getInstance().user_login();
});

