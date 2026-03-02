Feature: Login

    Scenario: successful Login
        Given I am in login page
        When I enter email "bdnu@gmail.com" and password "1N2B3V"
        Then I should see the heading Your Acoount.