package Runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\kavitha\\eclipse-workspace\\CucumberInFreecrm\\src\\main\\java\\com\\crm\\Features\\tagging.feature"
		,glue={"stepdefinition"}
		 ,format={"pretty","html:test-output","junit:junit_xml/cucumber.xml"}
		 ,strict =true
		 ,dryRun = false
	     ,monochrome =true 
	     ,tags = {"~@SmokeTest, @RegressionTest"}
	     )

public class TestRunner {
	
		

}
