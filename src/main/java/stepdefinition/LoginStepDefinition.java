package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



import org.junit.Assert;


public class LoginStepDefinition {
	
	public static WebDriver driver= null;
	
	@Given("^User is on Login Page$")
	public void User_is_on_Longin_Page(){
		System.setProperty("webdriver.chrome.driver","C:\\\\Users\\\\kavitha\\\\eclipse-workspace\\\\FreeCrmTest\\\\Drivers\\\\chromedriver_win32\\\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.freecrm.com");

}
	@When("^title of login page is FreeCRM$")
	public void title_of_login_page_is_FreeCRM()  {
	 String actual_title = driver.getTitle();
	 System.out.println(actual_title);
	//Assert.assertSame("#1 Free CRM software in the cloud for sales and service", actual_title);
	 
	}
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_Username_and_Password(String username, String password){
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);	 
		driver.manage().window().maximize();
	}
   @Then("^User Clicks on Login Button$")
   public void user_Clicks_on_Login_Button() {
//	   WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
//	   JavascriptExecutor js =(JavascriptExecutor)driver;
//	   js.executeScript("arguments[0].Click;",loginBtn);	  
	   driver.findElement(By.xpath("//input[@type='submit']")).click();
}
   @Then("^User is on Homepage$")
   public void user_is_on_Homepage()  {
     String title = driver.getTitle();
    // Assert.assertSame("CRMPRO", title);
     System.out.println(title);
      
   }
   @Then("^User moves to new contact page$")
   public void user_moves_to_new_contact_page()  {
	  driver.switchTo().frame("mainpanel");
      Actions action = new Actions(driver);
      WebElement contacts = driver.findElement(By.xpath("//a[@title='Contacts']"));
      action.moveToElement(contacts).perform();
      driver.findElement(By.xpath("//a[@title='New Contact']")).click();
  
}
   @Then("^User enters\"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
   public void user_enters_and_and(String firstname, String lastname, String position) {
       driver.findElement(By.id("first_name")).sendKeys(firstname);
       driver.findElement(By.id("surname")).sendKeys(lastname);
       driver.findElement(By.id("company_position")).sendKeys(position);
       driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
   }

   @Then("^Close the browser$")
   public void close_the_browser()  {
	   driver.close();
       
   }

}

