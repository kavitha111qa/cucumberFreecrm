$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kavitha/eclipse-workspace/CucumberInFreecrm/src/main/java/com/crm/Features/tagging.feature");
formatter.feature({
  "line": 3,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegrsssionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "This is a contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingStepDefinition.this_is_a_contact_test_case()"
});
formatter.result({
  "duration": 353932977,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "create a deal",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    },
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "This is a deal test case",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingStepDefinition.this_is_a_deal_test_case()"
});
formatter.result({
  "duration": 177921,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "create a task",
  "description": "",
  "id": "free-crm-application-testing;create-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "This is a task test case",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingStepDefinition.this_is_a_task_test_case()"
});
formatter.result({
  "duration": 47786,
  "status": "passed"
});
});