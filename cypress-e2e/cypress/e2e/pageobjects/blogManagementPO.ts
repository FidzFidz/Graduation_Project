import { blob } from "node:stream/consumers";
import BlogManagementLocators from "../locators/blogManagementLocators";
import BlogManagementModel from "../model/blogManagementModel";
import { stdin } from "node:process";
import { strict } from "node:assert";


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

    public login() {
        cy.get(BlogManagementLocators.LOGIN).click()
    }

    public fill_email(email: string) {
        cy.sendTextToElement(BlogManagementLocators.EMAIL, email);
    }

    public fill_password(password: string) {
        cy.sendTextToElement(BlogManagementLocators.PASSWORD, password);
    }

    public click_login_button() {
        cy.get(BlogManagementLocators.LOGIN_FORM).click();
    }
    
    public blogs_button(){
        cy.get(BlogManagementLocators.BLOGS).click()
    }

    public new_blog(){
        cy.get(BlogManagementLocators.NEW_BLOG).click()

    }
    public fill_title(title: string){
        cy.sendTextToElement(BlogManagementLocators.TITLE, title)
    }
    public fill_body(body: string){
        cy.sendTextToElement(BlogManagementLocators.BODY, body)
    }
    public tag_builder(){
        cy.get(BlogManagementLocators.TAG_BUILDER).click()
    }

    public submit_blog(){
        cy.get(BlogManagementLocators.SUBMIT_NEW_BLOG).click()
    } 

    public creation_flash_message(){
        cy.contains("Blog was successfully created.")
    }

    // Checking scenario #2

    public empty_title(title: string){
        cy.sendTextToElement(BlogManagementLocators.TITLE, title)
    }

    //  Checking scenario #3

    public edit_blog(){
        cy.get(BlogManagementLocators.EDIT_SHOW_BLOG).click()
    }

    public edit_this_blog(){
        cy.get(BlogManagementLocators.EDIT_BLOG).click()
    }

    public edit_title_field(title: string){
        cy.sendTextToElement(BlogManagementLocators.TITLE, title)
    }

    public edit_body_field(body: string){
        cy.sendTextToElement(BlogManagementLocators.TITLE, body)
    }

    public edit_tag_builder(){
        cy.get(BlogManagementLocators.TAG_BUILDER_EDIT).click()
    }

    // Checking scenario 4

    // public destroy_this_blog(){
    //     cy.get(BlogManagementLocators.DESTROY_THIS_BLOG_20).click()
    // }

    // public destroy_blog(){
    //     cy.get(BlogManagementLocators.DESTROY).click()
    // }

    // Checking scenario 5

    public show_blog_without_destroy_button(){
        cy.get(BlogManagementLocators.SHOW_BLOG_WITHOUT_EDIT).click()
    }

    public show_blog_without(){

        cy.contains("Body: blog body 2")
    }







}

export default BlogManagementPO