$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kavitha/eclipse-workspace/CucumberInFreecrm/src/main/java/com/crm/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters\"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario;;1"
    },
    {
      "cells": [
        "kavitha111",
        "Finland-2018",
        "test1",
        "testlast",
        "qa"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "naveentest",
        "naveenlast",
        "Architect"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"kavitha111\" and \"Finland-2018\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters\"test1\" and \"testlast\" and \"qa\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_Longin_Page()"
});
formatter.result({
  "duration": 5929899400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 21957157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kavitha111",
      "offset": 13
    },
    {
      "val": "Finland-2018",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 2645292195,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Clicks_on_Login_Button()"
});
formatter.result({
  "duration": 4916603165,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 98915582,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1905322505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 12
    },
    {
      "val": "testlast",
      "offset": 24
    },
    {
      "val": "qa",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2432819085,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 375515947,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters\"naveentest\" and \"naveenlast\" and \"Architect\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_Longin_Page()"
});
formatter.result({
  "duration": 4229493725,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 53719558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 2508964282,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1908943204,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 34637712,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1415030468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveentest",
      "offset": 12
    },
    {
      "val": "naveenlast",
      "offset": 29
    },
    {
      "val": "Architect",
      "offset": 46
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2906745868,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 265656773,
  "status": "passed"
});
});