Feature: User authorization



    Scenario: Verify that the manage tags appear correctly on the dashboard
        Given admin navigate to the index page
        When admin clicks on the login
        When admin fills the email with email "admin@zenhr.com"
        When admin fills the password with password "Fidz1"
        When admin clicks on the login form
        Then admin sees the manage tags hyperlink


    Scenario: Verify that the admin can see the manage tags URL
        Given admin navigate to the index page
        When admin clicks on the login
        When admin fills the email with email "admin@zenhr.com"
        When admin fills the password with password "Fidz1"
        When admin clicks on the login form
        When admin clicks on the manage tags hyperlink
        Then admin sees the URL for the Tags

    Scenario: Verify that the admin should access the manage tags
        Given admin navigate to the index page
        When admin clicks on the login
        When admin fills the email with email "admin@zenhr.com"
        When admin fills the password with password "Fidz1"
        When admin clicks on the login form
        When admin clicks on the manage tags hyperlink
        Then admin can access the manage tags page

    Scenario: Verify that the members cannot manage tags URL
        Given user navigate to the index page
        When user clicks on the login
        When user fills the email with email "user_1@zenhr.com"
        When user fills the password with password "Fidz2"
        When user clicks on the login form
        Then manage tags don't appear


# Scenario: Verify that the members cannot manage tags URL
#     Given members navigate to the index page
#     When user tries to access the manage tags URL with email "user_1@zenhr.com" and password "Fidz2"