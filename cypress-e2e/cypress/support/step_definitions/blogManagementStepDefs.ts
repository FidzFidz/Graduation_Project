import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import BlogManagementLocators from "../../e2e/locators/blogManagementLocators";
import BlogManagementModel from "../../e2e/model/blogManagementModel";
import BlogManagementPO from "../../e2e/pageobjects/blogManagementPO";


Given("users navigate to the index page", () => {
    BlogManagementPO.getInstance().navigate();
});

// // When("user clicks on the login button", () => {
// //     BlogManagementPO.getInstance().login();
// // });

// When("user fills in the email with email {string}", (email: string) => {
//     BlogManagementPO.getInstance().fill_email(email);
// });

// When("user fills in the password with password {string}", (password: string) => {
//     BlogManagementPO.getInstance().fill_password(password);
// });

// When("user clicks on the login form button", () => {
//     BlogManagementPO.getInstance().click_login_button();
// });

When("user clicks on blogs", () => {
    BlogManagementPO.getInstance().blogs_button();
});

When("user clicks on the new blog", () => {
    BlogManagementPO.getInstance().new_blog();
});

When("user fills the title field with title {string}", (title: string) => {
    BlogManagementPO.getInstance().fill_title(title);
});

When("user fills the body field with body {string}", (body: string) => {
    BlogManagementPO.getInstance().fill_body(body);
});

When("user choose the tag builder", () => {
    BlogManagementPO.getInstance().tag_builder();
});

Then("user clicks on submit", () => {
    BlogManagementPO.getInstance().submit_blog();
});

Then("Blog was successfully created flash message appears", () => {
    BlogManagementPO.getInstance().creation_flash_message();
});

// Checking scenario #2

Then("Title can't be blank validation message appears", (title: string) => {
    BlogManagementPO.getInstance().empty_title(title);
});

// Checking scenario #3

When("user clicks on the show this blog", () => {
    BlogManagementPO.getInstance().edit_blog();
});

When("user clicks on edit this blog", () => {
    BlogManagementPO.getInstance().edit_this_blog();
});

When("user edits the title field with title {string}", (title: string) => {
    BlogManagementPO.getInstance().edit_title_field(title);
});

When("user edits the body field with body {string}", (body: string) => {
    BlogManagementPO.getInstance().edit_body_field(body);
});

When("user edits the tag builder", () => {
    BlogManagementPO.getInstance().edit_tag_builder();
});

Then("user clicks on the submit", () => {
    BlogManagementPO.getInstance().submit_blog();
});


