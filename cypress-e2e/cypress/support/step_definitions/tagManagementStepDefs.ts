import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import TagManagementLocators from "../../e2e/locators/tagManagementLocators";
import TagManagementModel from "../../e2e/model/tagManagementModel";
import TagManagementPO from "../../e2e/pageobjects/tagManagementPO";



Given("admin navigate to index page", () => {
    TagManagementPO.getInstance().navigate();
});

When("admin clicks on the login button", () => {
    TagManagementPO.getInstance().login();
});

When("admin fills in the email with email {string}", (email: string) => {
    TagManagementPO.getInstance().fill_email(email);
});

When("admin fills in the password with password {string}", (password: string) => {
    TagManagementPO.getInstance().fill_password(password);
});

When("admin clicks on the login form button", () => {
    TagManagementPO.getInstance().click_login_button();
});

When("admin clicks the manage tags", () => {
    TagManagementPO.getInstance().click_manage_tags();
});

Then("seeds already exisits", () => {
    TagManagementPO.getInstance().list_tags();
});

// Checking Scenario #2

When("admin clicks on the new tag", () => {
    TagManagementPO.getInstance().new_tag();
});

When("admin fills the name field with name {string}", (name: string) => {
    TagManagementPO.getInstance().fill_name(name);
});

When("clicks on the submit button", () => {
    TagManagementPO.getInstance().submit_click();
});

Then("flash message appears", () => {
    TagManagementPO.getInstance().flash_message();
});

// Checking Scenario #3
When("admin clicks on the back to tags button", () => {
    TagManagementPO.getInstance().back_to_tag();
});

Then("Name has already been taken validation appears", () => {
    TagManagementPO.getInstance().error_message();
});
