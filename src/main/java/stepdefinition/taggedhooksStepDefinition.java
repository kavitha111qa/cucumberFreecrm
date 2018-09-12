package stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class taggedhooksStepDefinition {
	
	
	//Global Hooks:
    @Before(order=0)
   // @Before
	public void setup() {
		System.out.println("launch the browser");
	}
	@After(order=1)
	public void teardown() {
		System.out.println("close the browser");
	}
	
	//@Before("@First") 
	 @Before(order=0)
	public void beforeFrist(){	
		System.out.println("Before First scenario");
	}
	

  // @After("@First")
   @After(order=1)
	public void AfterFirst(){	
	   System.out.println("After First scenario");
}   

	@Before("@Second")
	public void beforesecond(){	
		System.out.println("Before second scenario");
	}
	

  @After("@Second")
	public void Aftersecond(){	
	  System.out.println("After second scenario");

} 
     @Given("^User is on the deal page$")
    public void User_is_on_deal_Page(){	
    	 System.out.println("step 1");
}
    
     @When("^User fills the deal form$")
 	public void User_is_on_deal_form(){	
    	 System.out.println("step 2");

 }   
	@Then("^User saves the deal form$")
	public void User_saves_deal_form(){
		System.out.println("step 3");
	
}
}
