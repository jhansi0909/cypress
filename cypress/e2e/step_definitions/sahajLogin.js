import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import sahajLogin from "@pages/sahajttpLogin";
const sahaj = new sahajLogin();

Given("Login page for Sahajttp", () => {
  sahaj.navigate();
});
When("user enter the valid email {string} and password {string} and also select a Canada country in the below dropdown and click on login button",() => {
    sahaj.successLogin();
  }
);
When('user enter the invalid email {string} and password {string} and also select a Canada country in the below dropdown and click on login button',()=>{
  sahaj.failedLogin()
})

When('user enter the invalid email {string} and valid password {string} and also select a Canada country in the below dropdown and click on login button',()=>{
  sahaj.failedLogin1()
})
When('user does not enter the email and password and also does not select Canada in the below dropdown and click on login button',()=>{
  sahaj.failedLogin2()
})

When('user enter the valid email {string} and invalid password {string} and also select a Canada country in the below dropdown and click on login button',() => {
    sahaj.wrongPwd();
  }
);
When('user enter the valid email and invalid password and also select a Canada country in the below dropdown and click on login button',()=>{
  sahaj.wrongCountry()
})
Then('user forgot the password click on Forgot Password?',()=>{
sahaj.forgotPassword()
})
Then('user enter valid email in forgot page',()=>{
  sahaj.forgotPage()
})

