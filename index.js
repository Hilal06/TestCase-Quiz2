const {Builder, By, Key, util} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://demo.1crmcloud.com/login.php');
    const username = By.name('user_name');
    const password = By.name('user_password');
    await driver.findElement(username).sendKeys('admin');
    await driver.findElement(password).sendKeys('admin', Key.ENTER);
    const profile = By.className('meta-profile');
    await driver.sleep(10000);
    await driver.findElement(profile).then(res => {
        res.click();
    });
}
example();