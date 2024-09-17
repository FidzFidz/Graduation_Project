Feature: User Authenication



       Scenario: Verify that the log in is working successfully
              Given user navigate to index page
              When user clicks on the login button
              When user fills in the email with email "user_1@zenhr.com" 
              When user fills in the password with password "Fidz2"
              When user clicks on the login form button
              Then user should be redirected to the dashboard page


          Scenario: Verify that the log in is working successfully
              Given user navigate to index page
              When user clicks on the login button
              When user fills in the email with email "user_1@zenhr.com" 
              When user fills in the password with password "Fidz1"
              When user clicks on the login form button
              Then false button appears
