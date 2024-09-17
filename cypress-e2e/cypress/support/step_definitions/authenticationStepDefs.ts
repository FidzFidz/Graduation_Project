
import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationModel from "../../e2e/model/authenticationModel";
import AuthenticationLocators from "../../e2e/locators/authenticationLocators";
import authenticationPO from "../../e2e/pageobjects/authenticationPO";



Given("user navigate to index page", () => {
    authenticationPO.getInstance().navigate();
});

When("user clicks on the login button", () => {
    authenticationPO.getInstance().login();
});

When("user fills in the email with email {string}", (email: string) => {
    authenticationPO.getInstance().fill_email(email);
});

When("user fills in the password with password {string}", (password: string) => {
    authenticationPO.getInstance().fill_password(password);
});

When("user clicks on the login form button", () => {
    authenticationPO.getInstance().click_login_button();
});

Then("user should be redirected to the dashboard page", () => {
    authenticationPO.getInstance().verify_redirection_to_dashboard();
});

Then("false button appears", () => {
    authenticationPO.getInstance().wrong_password();
});











