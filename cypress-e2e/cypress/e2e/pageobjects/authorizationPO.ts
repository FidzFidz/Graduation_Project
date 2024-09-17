import AuthorizationLocators from "../locators/authorizationLocators";
import AuthorizationalLocators from "../locators/authorizationLocators";
import AuthorizationModel from "../model/authorizarionModel";


class AuthorizationPO {

    public static instance: AuthorizationPO;

    public static getInstance(): AuthorizationPO {
        if (this.instance == null) {
            this.instance = new AuthorizationPO();
        }
        return this.instance;
    }

    private constructor() { }

    public navigate() {
        cy.visit("/");
    }

    public login() {
        cy.get(AuthorizationLocators.LOGIN).click()
    }

    public fill_email(email: string) {
        cy.sendTextToElement(AuthorizationLocators.EMAIL, email);
    }

    public fill_password(password: string) {
        cy.sendTextToElement(AuthorizationLocators.PASSWORD, password);
    }

    public click_login_button() {
        cy.get(AuthorizationLocators.LOGIN_FORM).click();
    }
    public check_manage_tags_hyperlink() {
        cy.contains("Manage Tags")
    }

    public click_manage_tags() {
        cy.get(AuthorizationLocators.MANAGE_TAGS).click()
    }
    public manage_tag_url() {
        cy.visit('http://localhost:3000/tags')

    }
    public access_manage_tags() {
        cy.contains("Professional")

    }

    public user_login(){
        cy.contains("Welcome user_1@zenhr.com To ZenHR Automation Graduation Project")
    }




}
export default AuthorizationPO

