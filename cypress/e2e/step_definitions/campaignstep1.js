import { When } from "@badeball/cypress-cucumber-preprocessor"
import campaignStep1 from "@pages/campaignstep-1"
const step1=new campaignStep1
import dashboardData from "@pages/files/dashboarddata"
const Dashboard=new dashboardData
import users from "@pages/files/users"
const User=new users

When('user click next button before filled the input fields and check the input fields changes to {string} color',()=>{
    step1.redColorInput()
})
When('user clicks on the {string} dropdown',(dropdownName)=>{
cy.contains(dropdownName).click()
})
When('user search the dashboard names below dropdown using search box',()=>{
step1.search()
})
When('user select one {string} in the below dropdown',()=>{
    step1.selectOneDashboard()
    step1.selectOneInstructor()
})
When('user click next button after filled the input fields and check the input fields changes to {string} color',()=>{
    step1.greenColorInput()
})
When('also get one crossIcon check the crossIcon color {string}',()=>{
    step1.CrossIcon()
})
When('user verify the api data',()=>{
  Dashboard.dashboardApiData()
})
When('user check the FE dashboard names and BE dashboard Names',()=>{
    Dashboard.dashboardFeData()
})
When('user check the FE user names and BE user Names',()=>{
User.userApiData()
})