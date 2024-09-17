Feature: Tag Management


    Scenario: Verify that listing already exisits based on the seeds
        Given admin navigate to index page
        When admin clicks on the login button
        When admin fills in the email with email "admin@zenhr.com"
        When admin fills in the password with password "Fidz1"
        When admin clicks on the login form button
        When admin clicks the manage tags
        Then seeds already exisits

# Testing Scenario #2


    Scenario: Verify that the creating new tag is working correctly
        Given admin navigate to index page
        When admin clicks on the login button
        When admin fills in the email with email "admin@zenhr.com"
        When admin fills in the password with password "Fidz1"
        When admin clicks on the login form button
        When admin clicks the manage tags
        When admin clicks on the new tag
        When admin fills the name field with name "Waino Fidz Keefo"
        When clicks on the submit button
        Then duplicated error message appears

 # Testing Scenario #3


    Scenario: Verify that the creating new tag is working correctly
        Given admin navigate to index page
        When admin clicks on the login button
        When admin fills in the email with email "admin@zenhr.com"
        When admin fills in the password with password "Fidz1"
        When admin clicks on the login form button
        When admin clicks the manage tags
        When admin clicks on the new tag
        When admin fills the name field with name "Waino Fidz Keefo"
        When admin clicks on the back to tags button
        When admin clicks on the new tag
        When admin fills the name field with name "Waino Fidz Keefo"
        When clicks on the submit button
        Then Name has already been taken validation appears