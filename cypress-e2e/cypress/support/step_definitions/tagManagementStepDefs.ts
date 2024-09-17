import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import TagManagementLocators from "../../e2e/locators/tagManagementLocators";
import TagManagementModel from "../../e2e/model/tagManagementModel";
import TagManagementPO from "../../e2e/pageobjects/tagManagementPO";



Given("admin navigate to the index page2", () => {
    TagManagementPO.getInstance().navigate();
});

When("admin clicks on the manage tags and check lists with email {string} and password {string} and name {string}", (email: string, password: string, name: string) => {
    const loginData: TagManagementModel = {
        email: "admin@zenhr.com",
        password: "Fidz1",
        name: " "
    };
    TagManagementPO.getInstance().list_tag(loginData);

});


Given("admin navigate to the index page4", () => {
    TagManagementPO.getInstance().navigate();
});

// when we try to create the below cases we need to make sure that the name should be a new name in order to check last test case

When("admin clicks on the submit to create a new tag to check the new tag with email {string} and password {string} and name {string}", (email: string, password: string, name: string) => {
    const loginData: TagManagementModel = {
        email: "admin@zenhr.com",
        password: "Fidz1",
        name: "HelloFidz3"
    };
    TagManagementPO.getInstance().create_new_tag(loginData);

});

Given("admin navigate to the index page5", () => {
    TagManagementPO.getInstance().navigate();
});


When("admin clicks on the submit to create a new tag to check the flash error message with email {string} and password {string} and name {string}", (email: string, password: string, name: string) => {
    const loginData: TagManagementModel = {
        email: "admin@zenhr.com",
        password: "Fidz1",
        name: "Football"
    };
    TagManagementPO.getInstance().create_new_tag(loginData);

});



