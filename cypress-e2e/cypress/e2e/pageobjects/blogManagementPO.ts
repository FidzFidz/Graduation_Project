import BlogManagementLocators from "../locators/blogManagementLocators";
import BlogManagementModel from "../model/blogManagementModel";


class BlogManagementPO {

    public static instance: BlogManagementPO;

    public static getInstance(): BlogManagementPO {
        if (this.instance == null) {
            this.instance = new BlogManagementPO();
        }
        return this.instance;
    }

    private constructor() { }

    public navigate() {
        cy.visit("/");
    }

    public create_new_blog(data: BlogManagementModel) {
        cy.get(BlogManagementLocators.LOGIN).click()
        cy.sendTextToElement(BlogManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, data.password)
        cy.get(BlogManagementLocators.LOGIN_FORM).click()
        cy.get(BlogManagementLocators.BLOGS).click()
        cy.get(BlogManagementLocators.NEW_BLOG).click()
        cy.sendTextToElement(BlogManagementLocators.TITLE, data.title)
        cy.sendTextToElement(BlogManagementLocators.BODY, data.body)
        cy.get(BlogManagementLocators.TAG_BUILDER).click()
        cy.get(BlogManagementLocators.SUBMIT_NEW_BLOG).click()
    }

    public check_empty_validation(data: BlogManagementModel) {
        cy.get(BlogManagementLocators.LOGIN).click()
        cy.sendTextToElement(BlogManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, data.password)
        cy.get(BlogManagementLocators.LOGIN_FORM).click()
        cy.get(BlogManagementLocators.BLOGS).click()
        cy.get(BlogManagementLocators.NEW_BLOG).click()
        cy.sendTextToElement(BlogManagementLocators.TITLE, data.title)
        cy.sendTextToElement(BlogManagementLocators.BODY, data.body)
        cy.get(BlogManagementLocators.TAG_BUILDER).click()
        cy.get(BlogManagementLocators.SUBMIT_NEW_BLOG).click()
    }

    public edit_personal_blog(data: BlogManagementModel) {
        cy.get(BlogManagementLocators.LOGIN).click()
        cy.sendTextToElement(BlogManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, data.password)
        cy.get(BlogManagementLocators.LOGIN_FORM).click()
        cy.get(BlogManagementLocators.BLOGS).click()
        cy.get(BlogManagementLocators.EDIT_SHOW_BLOG).click()
        cy.get(BlogManagementLocators.EDIT_BLOG).click()
        cy.get(BlogManagementLocators.TITLE).type("New Blog 2")
        cy.get(BlogManagementLocators.BODY).type("New Blog 2")
        cy.get(BlogManagementLocators.TAG_BUILDER_EDIT).click()
        cy.get(BlogManagementLocators.SUBMIT_NEW_BLOG).click()

    }

    // The below test cases to check a user without edit this blog button
    public edit_button(data: BlogManagementModel) {
        cy.get(BlogManagementLocators.LOGIN).click()
        cy.sendTextToElement(BlogManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, data.password)
        cy.get(BlogManagementLocators.LOGIN_FORM).click()
        cy.get(BlogManagementLocators.BLOGS).click()
        cy.get(BlogManagementLocators.SHOW_BLOG_WITHOUT_EDIT).click()
        cy.get(BlogManagementLocators.EDIT_BLOG).should('not.exist');
    }

    // Destroy test cases

    public destroy_personal_blog(data: BlogManagementModel) {
        cy.get(BlogManagementLocators.LOGIN).click()
        cy.sendTextToElement(BlogManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, data.password)
        cy.get(BlogManagementLocators.LOGIN_FORM).click()
        cy.get(BlogManagementLocators.BLOGS).click()
        cy.get(BlogManagementLocators.DESTROY_THIS_BLOG_20).click()
        cy.get(BlogManagementLocators.DESTROY).click()

    }

    // The below test cases to check a user without edit this blog button
    public destroy_not_found(data: BlogManagementModel) {
        cy.get(BlogManagementLocators.LOGIN).click()
        cy.sendTextToElement(BlogManagementLocators.EMAIL, data.email)
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, data.password)
        cy.get(BlogManagementLocators.LOGIN_FORM).click()
        cy.get(BlogManagementLocators.BLOGS).click()
        cy.get(BlogManagementLocators.SHOW_BLOG_WITHOUT_EDIT).click()
        cy.get(BlogManagementLocators.EDIT_BLOG).should('not.exist');
    }


}

export default BlogManagementPO