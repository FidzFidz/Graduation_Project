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

    public login_tag(data: AuthorizationModel) {
        cy.visit("/")
        cy.get(AuthorizationLocators.LOGIN).click();
        cy.sendTextToElement(AuthorizationLocators.EMAIL, data.email)
        cy.sendTextToElement(AuthorizationLocators.PASSWORD, data.password)
        cy.get(AuthorizationLocators.LOGIN_FORM).click()
        cy.get(AuthorizationLocators.SUCCESFULL_FLASH_MESSAGE).contains("Welcome admin@zenhr.com To ZenHR Automation Graduation Project")
    }

    public url_tag(data: AuthorizationModel) {
        cy.visit("/")
        cy.get(AuthorizationalLocators.LOGIN).click()
        cy.sendTextToElement(AuthorizationLocators.EMAIL, data.email)
        cy.sendTextToElement(AuthorizationLocators.PASSWORD, data.password)
        cy.get(AuthorizationLocators.LOGIN_FORM).click()
        cy.get(AuthorizationLocators.SUCCESFULL_FLASH_MESSAGE).contains("Welcome admin@zenhr.com To ZenHR Automation Graduation Project")
        cy.wait(1000)
        cy.get(AuthorizationLocators.MANAGE_TAGS).click()
    }

    public content_tag(data: AuthorizationModel) {
        cy.visit("/")
        cy.get(AuthorizationalLocators.LOGIN).click()
        cy.sendTextToElement(AuthorizationLocators.EMAIL, data.email)
        cy.sendTextToElement(AuthorizationLocators.PASSWORD, data.password)
        cy.get(AuthorizationLocators.LOGIN_FORM).click()
        cy.get(AuthorizationLocators.SUCCESFULL_FLASH_MESSAGE).contains("Welcome admin@zenhr.com To ZenHR Automation Graduation Project")
        cy.wait(1000)
        cy.get(AuthorizationLocators.MANAGE_TAGS).click()
        cy.contains("Funny")
    }

    public member_tag(data: AuthorizationModel) {
        cy.visit("/")
        cy.get(AuthorizationLocators.LOGIN).click()
        cy.sendTextToElement(AuthorizationLocators.EMAIL, data.email)
        cy.sendTextToElement(AuthorizationLocators.PASSWORD, data.password)
        cy.get(AuthorizationLocators.LOGIN_FORM).click()
        cy.get(AuthorizationLocators.SUCCESFULL_FLASH_MESSAGE).contains("Welcome user_1@zenhr.com To ZenHR Automation Graduation Project")
        cy.wait(1000)
        cy.visit("http://localhost:3000/tags")
        cy.contains("Not Authorized")
        cy.url().should('eq', 'http://localhost:3000/dashboard')

    }

}
export default AuthorizationPO

