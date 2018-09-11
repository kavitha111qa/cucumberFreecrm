Feature: Deal data creation

Scenario: Free CRM create new deal scenario

Given User is on Login Page
When title of login page is FreeCRM
Then User key in username and password
| kavitha111 | Finland-2018 |
Then User Clicks on Login Button
Then User is on Homepage
Then User moves to new deal page
Then User enters deal details
| testdeal | 1000 | 50 | 10 |
Then User clicks on Save button
Then Close the browser