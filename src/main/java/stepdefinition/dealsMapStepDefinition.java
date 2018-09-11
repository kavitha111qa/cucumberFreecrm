package stepdefinition;

	import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.chrome.ChromeDriver;
	import org.openqa.selenium.interactions.Actions;

	import cucumber.api.DataTable;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;


public class dealsMapStepDefinition {


	
	public static WebDriver driver= null;
		
		@Given("^User is on Login Page$")
		public void User_is_on_Longin_Page(){
			System.setProperty("webdriver.chrome.driver","C:\\\\Users\\\\kavitha\\\\eclipse-workspace\\\\FreeCrmTest\\\\Drivers\\\\chromedriver_win32\\\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("http://www.freecrm.com/index.html");
			driver.manage().window().maximize();

	}
		@When("^title of login page is FreeCRM$")
		public void title_of_login_page_is_FreeCRM()  {
		 String actual_title = driver.getTitle();
		 System.out.println(actual_title);
		//Assert.assertSame("#1 Free CRM software in the cloud for sales and service", actual_title);
		 
		}
		@Then("^User key in username and password$")
		public void user_enters_Username_and_Password(DataTable credentials){
			for(Map<String, String> data : credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
			}
			
		}
	   @Then("^User Clicks on Login Button$")
	   public void user_Clicks_on_Login_Button() {
//		   WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
//		   JavascriptExecutor js =(JavascriptExecutor)driver;
//		   js.executeScript("arguments[0].Click;",loginBtn);	  
		   driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	   @Then("^User is on Homepage$")
	   public void user_is_on_Homepage()  {
	     String title = driver.getTitle();
	    // Assert.assertSame("CRMPRO", title);
	     System.out.println(title);
	      
	   }

	   @Then("^User moves to new deal page$")
	   public void user_moves_to_new_deal_page()  {
			  driver.switchTo().frame("mainpanel");
		      Actions action = new Actions(driver);
		      WebElement deals = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		      action.moveToElement(deals).perform();
		      driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();  
		}
	   
	   @Then("^User enters deal details$")
	   public void user_enters_deal_details(DataTable credentials)  {
		for(Map<String, String> data : credentials.asMaps(String.class, String.class)) {
		   driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
			driver.findElement(By.xpath("//input[@type=\"submit\"]")).click(); 
			//move to deals  again
			 Actions action = new Actions(driver);
		      WebElement deals = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		      action.moveToElement(deals).perform();
		      driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click(); 
	   }
			
	   }
	   @Then("^User clicks on Save button$")
	   public void user_clicks_on_Save_button() {
		   driver.findElement(By.xpath("//input[@type=\"submit\"]")).click(); 
	   }

	   @Then("^Close the browser$")
	   public void close_the_browser()  {
		   driver.close();
	       
	   }
	}


	



