Feature:Free CRM Login Feature
# with Examples Keyword
Scenario Outline: Free CRM Login Test Scenario

Given User is on Login Page
When title of login page is FreeCRM
Then User enters "<username>" and "<password>"
Then User Clicks on Login Button
Then User is on Homepage

Examples:
   | username | password |
   | naveenk   | test@123 |
   | kavitha111 | Finland-2018|
   