Feature:workshop homepage
Scenario: valid workshop homepage
Given I navigate to workshop homepage
When user click on instructor in the dashboard
When user click on activities in the instructor dashboard we have to open one dropdown
# Then error message:"the instructor element is not found" is displayed
When user click on workshop in the below dropdown
And user check the sidescroll bar
And column selector
And multiple selection in column selector
And click on aplicar button
And click on calendar in workshop
And click on the months dropdown
And user click on the X mark in fetcha after selection of date
And user click on status filter
And user select the status filter dropdown
And user click on Borrador status field in basetable it should navigate the creation page where user stop the creation step