@FunctionalTest

Feature: Free CRM application testing

@SmokeTest
Scenario: log in with username and password
Given This a valid login test

@RegrsssionTest
Scenario: create a contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: create a deal
Given This is a deal test case

@RegressionTest
Scenario: create a task
Given This is a task test case

@SmokeTest
Scenario: search a deal
Given This is a search deal test case



