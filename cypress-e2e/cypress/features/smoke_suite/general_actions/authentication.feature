Feature: User Authenication



       Scenario: Verify that the log in is working succesfully
              Given user navigate to index page
              When user is logged in successfully with email "user_1@zenhr.com" and password "Fidz2"

       Scenario: Verify that the log in isn't working succesfully
              Given user navigate to index page
              When user isnt logged in with email "user_1@zenhr.com" and password "Fidz1"
