import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import sahajLogin from "@pages/sahajttpLogin";
const sahaj=new sahajLogin
import LogOut from "@pages/sahajLogout";
const sahajLogout=new LogOut

Given('Login page',()=>{
   sahaj.navigate()
})
Then('user enter the valid credentials email,password and select the country',()=>{
    sahaj.successLogin()
})

Then('after login user want to logout the account click on logout button. it is navigate again login page',()=>{
    sahajLogout.logoutbutton();
})