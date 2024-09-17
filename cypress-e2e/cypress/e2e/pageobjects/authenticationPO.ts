import AuthenticationModel from "../model/authenticationModel";
import AuthenticationLocators from "../locators/authenticationLocators";


class authenticationPO {

    public static instance: authenticationPO;

    public static getInstance(): authenticationPO {
        if (this.instance == null) {
            this.instance = new authenticationPO();
        }
        return this.instance;
    }

    private constructor() { }

    public navigate() {
        cy.visit("/");
    }

    public login() {
        cy.get(AuthenticationLocators.LOGIN).click()
    }

    public fill_email(email: string) {
        cy.sendTextToElement(AuthenticationLocators.EMAIL, email);
    }

    public fill_password(password: string) {
        cy.sendTextToElement(AuthenticationLocators.PASSWORD, password);
    }

    public click_login_button() {
        cy.get(AuthenticationLocators.LOGIN_FORM).click();
    }

    public verify_redirection_to_dashboard() {
        cy.contains("Dashboard")

    }

    public wrong_password(){
        cy.contains("false")

    }

}

export default authenticationPO