Feature: Tag Management



    Scenario: Verify that listing already exisits based on the seeds
        Given admin navigate to the index page2
        When admin clicks on the manage tags and check lists with email "admin@zenhr.com" and password "Fidz1" and name " "

    Scenario: Verify that the creating new tag is working correctly
        Given admin navigate to the index page4
        Then admin clicks on the submit to create a new tag to check the new tag with email "admin@zenhr.com" and password "Fidz1" and name "HelloFidz3"

    Scenario: Verify that the duplicated error message appears
        Given admin navigate to the index page5
        Then admin clicks on the submit to create a new tag to check the flash error message with email "admin@zenhr.com" and password "Fidz1" and name "Football"