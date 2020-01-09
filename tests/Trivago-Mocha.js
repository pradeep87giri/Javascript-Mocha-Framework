var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var driver = new webdriver.Builder().forBrowser('chrome').build();


describe("Test Suite", function(){
    let urlTest2 = 'https://www.bergfreunde.eu';
  
    before(function(){
        driver.manage().window().maximize();
        driver.wait()
        // driver.get('https://www.bergfreunde.eu'); 
        driver.get(urlTest2);
    });
 
    after(function(){
        // driver.quit();
    });
    
    beforeEach(function(){
    
    });
 
    afterEach(function(){
 
    });
  
    it("Test-1", function(){
        driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//input[@data-codecept=\'searchGo\']')), 30000);
        driver.findElement(webdriver.By.xpath('//input[@data-codecept=\'searchGo\']')).click();
        // driver.findElement(webdriver.By.css('input.searchfield')).sendKeys('LUNDHAGS');
        // webdriver.Key.ENTER;
    });
 
    it("Test-2", function(){
        
    });
 
    it("Test-3", function(){
 
    });
  
});