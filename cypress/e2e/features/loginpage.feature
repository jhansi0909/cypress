Feature: Login page
Scenario: success login
Given Login page
When user enter valid email and password, and clicks on the login button
# Then user navigate the login page to dashboard
Scenario: failed login
Given Invalid login page
When user enter the invalid username and password, and clicks on the login button
# Then then error message "Invalid username or password please provide the valid username and password" is displayed