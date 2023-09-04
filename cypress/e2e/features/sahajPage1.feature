Feature: Functional verification of sahajttp page1
 Feature Login page will work depending on the user credentials.

 Scenario: Successfull login 
  Given Login page for Sahajttp
  When user enter valid email "test.ca@yopmail.com" and password "12345678" and also select a Canada country in the below dropdown and click on login button

  When In select Ttp page User click on the dropdown. we have to open one dropdown, It contains list of courses
  When User select only one Course at a time in the below dropdown
  Then User click on Apply button

#  Scenario: sahajttp page one
#  And it should contain one message icon, TTP Applicaion(heading) and also some text is present.


# #  Scenario: Step navigator(1-4)
#  And first step should be a blue color

#  Scenario: postive test cases
#  And check the text "Applicant's Name*" it is present left side of the form
# Scenario: sahajttp Page1
When user enter the applicant name it must be accept all Integers,Strings and Special character also 
#  And check the text "Date Of Birth*" it is present left side of the form
And first check the default dob it is "01/01/1900" present or not in dob input field and click on calendar it shows the default date
And the dob input field it does not contain any date then user click on calendar it shows the today date
When user want to select the dob click on the calendar icon and user click on calendar icon it shows the today date
When user want to select the year, click on dropdown after open a calendar and then select the year
When user want to select previous month click on left arrow 
When user want to select next month click on right arrow 
When user want to select date after selection of month click numbers on that month 
When user want to enter dob manually, user can type the date in date format "mm/dd/yyyy"

# And check the text "Gender*" it is present left side of the form
# And We have three radio buttons

When user select only one radio button

# And check the text "Address*" it is present left side of the form
# And one Address input field 

When user enter the Address in Address input field, It must be accept all Integers,characters and Special characters also
When user select the country in the below dropdown and the state dropdown contains the states of that country and also automatically filled the country code in the phone number field
When user select the state. Only it should contains the above country selection states
When city input field should be empty and then user enter the city name manually in city input field
When user enter the postalcode manually, first check this filled empty or not
When user enter the email manually in the format of "abc@gmail.com", first check this filled empty or not
When user enter the phonenumber. It must be greaterthan 7 and less than or equal to 11
When user want to navigate to next page click on Next button in page1
# When user save the data until fields are filled click on Save button, It stores the data in the database in page-1

# Scenario: Nagitive test case
#  When user want to clear the applicant name field it shows one error message "Name field is required" (red color)
#  When the default dob is not present in dob field, It shows an error
#  When user click on calendar icon but it does not open a calendar, it shows an bug
#  When user click on year dropdown but it does not open a years, it shows an bug
#  When user click on left arrow or right arrow, It does'nt move the previous months or next months, it shows an bug
#  When user want enter dob manually, but it does not enable to enter, it shows an bug
#  When user select enable multiple radio buttons, it shows an bug
#  When user want to clear the Address input field it shows one error message "Address field is required" (red color)


# Page-2 

# Feature: validation for sahajPage-2
# Scenario: Sahaj Page-2
# Given user login valid credentials

When user select atmost one check box, If user physically Fit Or not
When and also user want to uncheck the box again click on that checkBox and user does not select atleast one checkBox. It shows Error: Please select one
When If user under any prescribed medical treatment click on YES radio button, Otherwise click on NO radio button
When If user undergone any psychiatric treatment click on Yes radio button, Otherwise click on No radio button
When If user follow only vegetarian diet click on YES radio button, Otherwise click on NO button
When If user any other issues,difficulties type on that input field
When If user programs done Past one year select Yes, Otherwise select No
When If user click on yes we have to open one input field, We have enter course date,venue and Teacher name
When user heard in past 1 year from the date of application select atmost one check box and also user want to uncheck the box again click on that checkBox
When user read in past 1 year from the date of application select atmost one check box and also user want to uncheck the box again click on that checkBox
When user want to navigate to next page click on Next button in page2
# When user want to navigate to previous page in page2 click on previous button. It should navigate to page-1
# When user save the data until fields are filled click on Save button, It stores the data in the database in page-2

# page-3
# Scenario: Sahaj Page-3
#  user select the date
And first check the default date it is "01/01/1900" present or not in date input field and click on calendar it shows the default date in page3
And the date input field it does not contain any date then user click on calendar it shows the today date in page3
When user want to select the date click on the calendar icon and user click on calendar icon it shows the today date in page3
When user want to select the year, click on dropdown after open a calendar and then select the year in page3
When user want to select previous month click on left arrow in page3
When user want to select next month click on right arrow in page3
When user want to select date after selection of month click numbers on that month in page3
When user want to enter date manually, user can type the date in date format "mm/dd/yyyy" in page3
When user select the only one option either full time OR part time
When user have any Programs taught type on Programs taught input field, It accept only string, does not enter any value it shows an error Program taught field is required
When enter no.of happiness programs conducted. It accept only a number, user does not enter any value it shows an error Number of happiness programs field is required
When enter no.of participants. It accept only a number, user does not enter any value it shows an error Number of participant field is required
When user want to navigate to next page click on Next button in page3 and then navigate to page-4
# When user want to navigate to previous page in page3 click on previous button. It should navigate to page-2
# When user save the data until fields are filled click on Save button, It stores the data in the database in page-3

# Scenario: Sahaj Page-4
# Page-4
When user practice sahaj samadhi meditation select by daily or weekly or monthly. User select only one radio button at a time.
When next contain one gurupuja phase-1 input. user enter Gurupuja phase-1 details in that input like: course date,venue,teacher name.
When next contain one gurupuja phase-1 input. user enter Gurupuja phase-2 details in that input like: course date,venue,teacher name.
# And  the above two input's accept all integers,string,Special characters and user want to clear or does not enter any value. It shows an error 
When next contain one guru puja count input field. User enter guru puja count. It accept only integers
And user want to clear the value of gurupuja input field or does not enter the any value. It shows an error
When user thorough with Guru Puja chanting, Meaning and Performance select Yes. Otherwise, select No
And contain one Gurupuja Audio Link input field. It accept must be url. Otherwise, It show an error
And also contain one Gurupuja video link input field. It accept must be url. Otherwise, It show an error
And also contain one alert icon. User click on that icon. It shows instructions to upload the audio link and video link.
And contain no.of sahaj samadhi programs organized input field. User enter only integers. It accept only integers.
And contain no.of Participants Registered for Sahaj Samadhi Meditation input field. User enter only integers. It accept only integers.
# And the above two input's accept only integers and user want to clear or does not enter any value. It shows an error
And one reason input field, Why would you like to become a Sahaj Samadhi Meditation Program teacher.User want to clear the input or does not enter any text it shows an error
When contain Teacher details Name of teacher. It accept string and integers. User want to clear the data in input field or does not enter any text it shows an Error
When Teachers email Address
When Teacher code. It accept all integers,string,Special characters.
And one Declaration Check box
# And contains three buttons previous,Save,Submitbutton
# When user click on previous button move to previous page
# When user save the data until fields are filled click on Save button in page-4, It stores the data in the database
When user filled all fields in the applicantion form click on Submitbutton it submit the applicantion.Otherwise show an error.Please filled the required fields at the top of the page

