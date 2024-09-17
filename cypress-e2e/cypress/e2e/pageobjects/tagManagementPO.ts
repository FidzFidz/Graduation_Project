import TagManagementLocators from "../locators/tagManagementLocators";
import TagManagementModel from "../model/tagManagementModel";
class TagManagementPO {

    public static instance: TagManagementPO;

    public static getInstance(): TagManagementPO {
        if (this.instance == null) {
            this.instance = new TagManagementPO();
        }
        return this.instance;
    }

    private constructor() { }

    public navigate() {
        cy.visit("/");
    }

    public list_tag(data: TagManagementModel) {
        cy.get(TagManagementLocators.LOGIN).click()
        cy.sendTextToElement(TagManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(TagManagementLocators.PASSWORD, data.password)
        cy.get(TagManagementLocators.LOGIN_FORM).click()
        cy.get(TagManagementLocators.MANAGE_TAGS).click()
        cy.wait(1000)
        cy.contains("Professional")

    }
    public create_new_tag(data: TagManagementModel) {
        cy.get(TagManagementLocators.LOGIN).click()
        cy.sendTextToElement(TagManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(TagManagementLocators.PASSWORD, data.password)
        cy.get(TagManagementLocators.LOGIN_FORM).click()
        cy.get(TagManagementLocators.MANAGE_TAGS).click()
        cy.get(TagManagementLocators.NEW_TAG).click()
        cy.sendTextToElement(TagManagementLocators.NEW_NAME, data.name)
        cy.get(TagManagementLocators.SUBMIT_NEW_TAG).click()

    }

    public check_validation_message(data: TagManagementModel) {
        cy.get(TagManagementLocators.LOGIN).click()
        cy.sendTextToElement(TagManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(TagManagementLocators.PASSWORD, data.password)
        cy.get(TagManagementLocators.LOGIN_FORM).click()
        cy.get(TagManagementLocators.MANAGE_TAGS).click()
        cy.get(TagManagementLocators.NEW_TAG).click()
        cy.sendTextToElement(TagManagementLocators.NEW_NAME, data.name)
        cy.get(TagManagementLocators.SUBMIT_NEW_TAG).click()

    }


}

export default TagManagementPO