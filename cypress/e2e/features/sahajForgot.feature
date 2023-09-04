  Feature: Forgot Password
  Scenario:forgot password
  Given Login page for Sahajttp application
  When user forgot the password click on Forgot Password? 

  Scenario: Valid credentials
  When user enter valid email in forgot page and user select the country canada in the below dropdown
  Then click on the submit button We have to open one alert OK box
  When user click on Ok button again navigate login page

  Scenario: Invalid credentials
  When user enter type wrong email and user select wrong country 
  Then Click on submit button we have to open one pop up Invalid Email/country Name
  Then click on Ok button we have to close the popup

  When user click on GO TO LOGIN PAGE button navigate the login page