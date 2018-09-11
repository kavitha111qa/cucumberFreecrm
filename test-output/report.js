$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kavitha/eclipse-workspace/CucumberInFreecrm/src/main/java/com/crm/Features/dealsmap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "kavitha111",
        "Finland-2018"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "testdeal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "testdeal2",
        "2000",
        "30",
        "10"
      ],
      "line": 17
    },
    {
      "cells": [
        "testdeal3",
        "3000",
        "20",
        "10"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "dealsMapStepDefinition.User_is_on_Longin_Page()"
});
formatter.result({
  "duration": 9627466457,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 578885254,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.user_enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 2707596728,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.user_Clicks_on_Login_Button()"
});
formatter.result({
  "duration": 9132214413,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 190456645,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 2761391379,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 15544255649,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 1730067166,
  "status": "passed"
});
formatter.match({
  "location": "dealsMapStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2651389272,
  "status": "passed"
});
});