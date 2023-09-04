const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
import sahajLogin from "@pages/sahajttpLogin";
const url=new sahajLogin
import ForgotPassword from "@pages/sahajforgotpassword";
const sahaj= new ForgotPassword

Given('Login page for Sahajttp application',()=>{
   url.navigate()
})
Then('user forgot the password click on Forgot Password?',()=>{
 sahaj.forgotPassword()
})
Then('user enter valid email in forgot page and user select the country canada in the below dropdown',()=>{
    sahaj.forgotValidDetails()
})
Then('click on the submit button We have to open one alert OK box',()=>{
    sahaj.submitButton()
})
Then('user click on Ok button again navigate login page',()=>{
    sahaj.alert()
})
Then('user enter type wrong email and user select wrong country',()=>{
    sahaj.forgotInvaliDetails()
})
Then('Click on submit button we have to open one pop up Invalid Email/country Name',()=>{
    sahaj.submitButton()
})
Then('click on Ok button we have to close the popup',()=>{
    sahaj.popup()
})
Then('user click on GO TO LOGIN PAGE button navigate the login page',()=>{
    sahaj.goToLoginPageButton()
})