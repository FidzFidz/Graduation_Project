Feature: User Blog



    Scenario: Verify that the creating new blog is working correctly
        Given users navigate to the index page
        When user clicks on new blog and check the new blog with email "user_1@zenhr.com" and password "Fidz2" and title "New blog1" and body "New blog1"

    Scenario: Verify that the flash messsage appears when the title field is empty
        Given users navigate to the index page
        When user clicks on submit and the title field is empty with email "user_1@zenhr.com" and password "Fidz2" and title " " and body "New blog1"


    Scenario: Verify that the user can edit a personal blog
        Given users navigate to the index page
        When user edit personal blog with email "user_1@zenhr.com" and password "Fidz2" and title " " and body " "

    Scenario: Verify that the edit doesn't appear on some show blogs
        Given users navigate to the index page
        Then edit some blogs don't appear with email "user_1@zenhr.com" and password "Fidz2" and title " " and body " "

    Scenario: Verify that the destroy button is working correctly
        Given users navigate to the index page
        Then users can destroy personal blog with email "user_1@zenhr.com" and password "Fidz2" and title " " and body " "

    Scenario: Verify that the destroy button doesn't appear
        Given users navigate to the index page
        Then destroy button doesn't appear with email "user_1@zenhr.com" and password "Fidz2" and title " " and body " "