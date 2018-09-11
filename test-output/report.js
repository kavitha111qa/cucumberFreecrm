$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kavitha/eclipse-workspace/CucumberInFreecrm/src/main/java/com/crm/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User key in username and password",
  "rows": [
    {
      "cells": [
        "kavitha111",
        "Finland-2018"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters deal details",
  "rows": [
    {
      "cells": [
        "testdeal",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "dealsStepDefinition.User_is_on_Longin_Page()"
});
formatter.result({
  "duration": 6443405130,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 33151204,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.user_enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 2805894068,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.user_Clicks_on_Login_Button()"
});
formatter.result({
  "duration": 5162124650,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 107100770,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 1256011104,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 682777485,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 1502804058,
  "status": "passed"
});
formatter.match({
  "location": "dealsStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2650785537,
  "status": "passed"
});
});