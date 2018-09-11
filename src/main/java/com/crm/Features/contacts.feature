Feature: Free CRM Create Contacts

Scenario Outline: Free CRM create new contacts scenario

Given User is on Login Page
When title of login page is FreeCRM
Then User enters "<username>" and "<password>"
Then User Clicks on Login Button
Then User is on Homepage
Then User moves to new contact page
Then User enters"<firstname>" and "<lastname>" and "<position>"
Then Close the browser

Examples:
 | username | password | firstname | lastname | position |
 | kavitha111 | Finland-2018 | test1 | testlast | qa |
 | kavitha111 | Finland-2018 | naveentest | naveenlast | Architect |

