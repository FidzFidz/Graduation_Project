import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import BlogManagementLocators from "../../e2e/locators/blogManagementLocators";
import BlogManagementModel from "../../e2e/model/blogManagementModel";
import BlogManagementPO from "../../e2e/pageobjects/blogManagementPO";



Given("users navigate to the index page", () => {
    BlogManagementPO.getInstance().navigate();
});

When("user clicks on new blog and check the new blog with email {string} and password {string} and title {string} and body {string}", (email: string, password: string, title: string, body: string) => {
    const loginData: BlogManagementModel = {
        email: "user_1@zenhr.com",
        password: "Fidz2",
        title: "New blog1",
        body: "New blog1"
    };
    BlogManagementPO.getInstance().create_new_blog(loginData);

});


When("user clicks on submit and the title field is empty with email {string} and password {string} and title {string} and body {string}", (email: string, password: string, title: string, body: string) => {
    const loginData: BlogManagementModel = {
        email: "user_1@zenhr.com",
        password: "Fidz2",
        title: " ",
        body: "New blog1"
    };
    BlogManagementPO.getInstance().check_empty_validation(loginData);
});

When("user edit personal blog with email {string} and password {string} and title {string} and body {string}", (email: string, password: string, title: string, body: string) => {
    const loginData: BlogManagementModel = {
        email: email,
        password: password,
        title: title,
        body: body
    };
    BlogManagementPO.getInstance().edit_personal_blog(loginData);
});

Then("edit some blogs don't appear with email {string} and password {string} and title {string} and body {string}", (email: string, password: string, title: string, body: string) => {
    const loginData: BlogManagementModel = {
        email: email,
        password: password,
        title: title,
        body: body
    };
    BlogManagementPO.getInstance().edit_button(loginData);
});

Then("users can destroy personal blog with email {string} and password {string} and title {string} and body {string}", (email: string, password: string, title: string, body: string) => {
    const loginData: BlogManagementModel = {
        email: "user_1@zenhr.com",
        password: "Fidz2",
        title: " ",
        body: " "
    };
    BlogManagementPO.getInstance().destroy_personal_blog(loginData);
});

Then("destroy button doesn't appear with email {string} and password {string} and title {string} and body {string}", (email: string, password: string, title: string, body: string) => {
    const loginData: BlogManagementModel = {
        email: "user_1@zenhr.com",
        password: "Fidz2",
        title: " ",
        body: " "
    };
    BlogManagementPO.getInstance().destroy_not_found(loginData);
});