Feature: User Blog



    Scenario: Verify that the creating new blog is working correctly
        Given user navigate to index page
        When user clicks on the login button
        When user fills in the email with email "user_1@zenhr.com"
        When user fills in the password with password "Fidz2"
        When user clicks on the login form button
        When user clicks on blogs
        When user clicks on the new blog
        When user fills the title field with title "realMadrid"
        When user fills the body field with body "barcelona"
        When user choose the tag builder
        Then user clicks on submit
        Then Blog was successfully created flash message appears


  Scenario: Verify that the creating new blog is working correctly
        Given user navigate to index page
        When user clicks on the login button
        When user fills in the email with email "user_1@zenhr.com"
        When user fills in the password with password "Fidz2"
        When user clicks on the login form button
        When user clicks on blogs
        When user clicks on the new blog
        When user fills the title field with title " "
        When user fills the body field with body "barcelona"
        When user choose the tag builder
        Then user clicks on submit
        Then Title can't be blank validation message appears

  Scenario: Verify that the user can edit a personal blog
        Given user navigate to index page
        When user clicks on the login button
        When user fills in the email with email "user_1@zenhr.com"
        When user fills in the password with password "Fidz2"
        When user clicks on the login form button
        When user clicks on blogs
        When user clicks on the show this blog
        When user clicks on edit this blog
        When user edits the title field with title "55555"
        When user edits the body field with body "44444"
        When user edits the tag builder
        When user clicks on the submit

        # Scenario: Verify that the destroy button is working correctly
        # Given user navigate to index page
        # When user clicks on the login button
        # When user fills in the email with email "user_1@zenhr.com"
        # When user fills in the password with password "Fidz2"
        # When user clicks on the login form button
        # When user clicks on blogs
        # When user clicks on destroy this blog
        # When user clicks on the submit destroy


        Scenario: Verify that the destroy button doesn't appear
        Given user navigate to index page
        When user clicks on the login button
        When user fills in the email with email "user_1@zenhr.com"
        When user fills in the password with password "Fidz2"
        When user clicks on the login form button
        When user clicks on blogs
        When user clicks on show this blog without destroy
        Then destroy button doesn't appear






# Scenario: Verify that the destroy button doesn't appear
#     Given users navigate to the index page
#     Then destroy button doesn't appear with email "user_1@zenhr.com" and password "Fidz2" and title " " and body " "