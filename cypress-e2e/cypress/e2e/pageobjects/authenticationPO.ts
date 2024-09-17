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

    public login(data: AuthenticationModel) {
        cy.wait(1000)
        cy.get(AuthenticationLocators.LOGIN).click()
        cy.sendTextToElement(AuthenticationLocators.EMAIL, data.email)
        cy.sendTextToElement(AuthenticationLocators.PASSWORD, data.password)
        cy.get(AuthenticationLocators.LOGIN_FORM).click()
    }


}

export default authenticationPO