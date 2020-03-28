Feature: FreeCRM login feature
   Scenario Outline:: FreeCRM login test scenario

    Given user is on login page
    When title of the login page is CRM software for customer relationship management, sales, and support.
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    Then title of the login page is CRMPRO
    Then close the browser
 
 Examples:
      
   |username |  password |
   |shilpaabc| Sh$ln9606 |
   |Tom      | test123   | 