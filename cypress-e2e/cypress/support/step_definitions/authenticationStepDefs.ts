
import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationModel from "../../e2e/model/authenticationModel";
import AuthenticationLocators from "../../e2e/locators/authenticationLocators";
import authenticationPO from "../../e2e/pageobjects/authenticationPO";



Given("user navigate to index page", () => {
    authenticationPO.getInstance().navigate();
});


When("user is logged in successfully with email {string} and password {string}", (email: string, password: string) => {
    const loginData: AuthenticationModel = {
        email: email,
        password: password
    };
    authenticationPO.getInstance().login(loginData);

});


When("user isnt logged in with email {string} and password {string}", (email: string, password: string) => {
    const loginData: AuthenticationModel = {
        email: email,
        password: password
    };
    authenticationPO.getInstance().login(loginData);
});











