Feature: Sahajttp Login page
  Feature Login page will work depending on the user credentials.
  Scenario: Successfull login 
  Given Login page for Sahajttp
  When user enter the valid email "test.ca@yopmail.com" and password "12345678" and also select a Canada country in the below dropdown and click on login button

  Scenario: failed Login
   Given Login page for Sahajttp
  When user enter the invalid email "testca@yopmail.com" and password "12345678" and also select a Canada country in the below dropdown and click on login button

  Scenario: failed Login1
   Given Login page for Sahajttp
  When user enter the invalid email "test.cayopmail.com" and valid password "12345678" and also select a Canada country in the below dropdown and click on login button


  Scenario: failed Login2
   Given Login page for Sahajttp
  When user does not enter the email and password and also does not select Canada in the below dropdown and click on login button

    Scenario: invalid pwd
   Given Login page for Sahajttp
  When user enter the valid email "test.ca@yopmail.com" and invalid password "123478" and also select a Canada country in the below dropdown and click on login button

    Scenario: invalid country
   Given Login page for Sahajttp
  When user enter the valid email and invalid password and also select a Canada country in the below dropdown and click on login button

  # Scenario:forgot password
  # Given Login page for Sahajttp
  # When user forgot the password click on Forgot Password? 
  # Scenario: Valid credentials
  # When user enter valid email in forgot page
  # When user select the country canada in the below dropdown

  # Scenario: forgot-password 


  # Then error message:"please provide the valid email and password" is displayed
  # And user enter valid password 
  # And user click on country dropdown and must be select Canada country
  # And user click on the login button
  # Scenario: failed Login
  # When user enter the invalid email and password and also select country dropdownclick on the login button
  # Then error message:"please provide the valid email and password" is displayed
  # When user click on the country dropdown it should open the one country dropdown
  # When user must select the Canada 
  # When user must be filled all fields and then click on login button

