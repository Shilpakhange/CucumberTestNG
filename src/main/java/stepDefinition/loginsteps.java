package stepDefinition;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginsteps {

	
	WebDriver driver;

	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Shilpa Khandge\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://classic.crmpro.com/index.html");

	}

	@When("^title of the login page is CRM software for customer relationship management, sales, and support\\.$")
	public void title_of_the_login_page_is_CRM_software() {
		String title = driver.getTitle();
		assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) {
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement loginButton = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", loginButton);

	}

	@Then("^title of the login page is CRMPRO$")
	public void title_of_the_login_page_is_CRMPRO() {
	
	String title1=driver.getTitle();
	assertEquals("CRMPRO", title1);
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
