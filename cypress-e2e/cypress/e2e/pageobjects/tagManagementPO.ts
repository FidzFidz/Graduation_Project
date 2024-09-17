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


    public login() {
        cy.get(TagManagementLocators.LOGIN).click()
    }

    public fill_email(email: string) {
        cy.sendTextToElement(TagManagementLocators.EMAIL, email);
    }

    public fill_password(password: string) {
        cy.sendTextToElement(TagManagementLocators.PASSWORD, password);
    }

    public click_login_button() {
        cy.get(TagManagementLocators.LOGIN_FORM).click();
    }
    public click_manage_tags() {
        cy.get(TagManagementLocators.MANAGE_TAGS).click();
    }
    public list_tags() {
        cy.contains("Professional")

    }

    // Checking Scenario #2

    public new_tag() {
        cy.get(TagManagementLocators.NEW_TAG).click();

    }

    public fill_name(name: string) {
        cy.sendTextToElement(TagManagementLocators.NEW_NAME, name);
    }

    public submit_click() {
        cy.get(TagManagementLocators.SUBMIT_NEW_TAG).click()
    }

    public flash_message() {
        cy.contains("Tag was successfully created.")
    }

    // Checking Scenario #3

    public back_to_tag(){
        cy.get(TagManagementLocators.BACK_TO_TAGS).click()
        cy.wait(1000)
    }

    public error_message() {
        cy.contains("Name has already been taken")
        cy.wait(1000)
    }





}
export default TagManagementPO