const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import sahajPage1 from "@pages/sahajPage1";
const page1=new sahajPage1
import SahajPage2 from "@pages/sahajPage2";
const page2=new SahajPage2
import sahajPage3 from "@pages/sahajPage3";
const page3=new sahajPage3
import sahajPage4 from "@pages/sahajPage4";
const page4= new sahajPage4

Given('sahajttp Page one',()=>{
  page1.navigate()
})

When("user enter valid email {string} and password {string} and also select a Canada country in the below dropdown and click on login button",() => {
    page1.successLogin();
  }
);

When('In select Ttp page User click on the dropdown. we have to open one dropdown, It contains list of courses',()=>{
page1.clickSelectTtpDropdown()
})
When('User select only one Course at a time in the below dropdown',()=>{
    page1.selectOneCourse()
})
Then('User click on Apply button',()=>{
    page1.clickApplyButton()
})

//top of the form
Then('it should contain one message icon, TTP Applicaion(heading) and also some text is present.',()=>{
    page1.top()
})

//step navigator
Then('first step should be a blue color',()=>{
    page1.stepNavigator()
})

//Applicant name
Then('user enter the applicant name it must be accept all Integers,Strings and Special character also',()=>{
    page1.applicantInputField();
})
 
Then('first check the default dob it is {string} present or not in dob input field and click on calendar it shows the default date',()=>{
   page1.checkDefaultDob()
});

Then('the dob input field it does not contain any date then user click on calendar it shows the today date',()=>{
 cy.get('input[type="tel"]')
 .get('[value="01/01/1900"]').should('have.value','01/01/1900').clear()
})

Then('user want to select the dob click on the calendar icon and user click on calendar icon it shows the today date',()=>{
    page1.calendar()
})

Then('user want to select the year, click on dropdown after open a calendar and then select the year',()=>{
    page1.yearDropdown()
})

Then('user want to select previous month click on left arrow',()=>{
    page1.previousMonth()
})
Then('user want to select next month click on right arrow',()=>{
    page1.NextMonth()
})
Then('user want to select date after selection of month click numbers on that month',()=>{
    page1.selectDates()
})
Then('user want to enter dob manually, user can type the date in date format {string}',()=>{
    page1.manuallyDateType()
})
Then('user select only one radio button',()=>{
    page1.genderSelection()
})
Then("user enter the Address in Address input field, It must be accept all Integers,characters and Special characters also",()=>{
    page1.addressType()
})
Then("user select the country in the below dropdown and the state dropdown contains the states of that country and also automatically filled the country code in the phone number field",()=>{
    page1.countrySelection()
})
Then('user select the state. Only it should contains the above country selection states',()=>{
    page1.selectState()
})
Then('city input field should be empty and then user enter the city name manually in city input field',()=>{
page1.cityEnter()
})
Then('user enter the postalcode manually, first check this filled empty or not',()=>{
    page1.postalCode()
})
Then('user enter the email manually in the format of {string}, first check this filled empty or not',()=>{
    page1.emailInput()
})
Then('user enter the phonenumber. It must be greaterthan 7 and less than or equal to 11',()=>{
    page1.phoneNumber()
})
Then('user want to navigate to next page click on Next button in page1',()=>{
    page1.nextButton()
})
Then('user save the data until fields are filled click on Save button, It stores the data in the database in page-1',()=>{
    page1.saveButton()
})


// Page-2
Then('user select atmost one check box, If user physically Fit Or not',()=>{
   page2.checkBoxes()
})
Then("and also user want to uncheck the box again click on that checkBox and user does not select atleast one checkBox. It shows Error: Please select one",() => {
    page2.unCheck();
  }
);
Then('If user under any prescribed medical treatment click on YES radio button, Otherwise click on NO radio button',()=>{
    page2.medicalTreatment()
})
Then('If user undergone any psychiatric treatment click on Yes radio button, Otherwise click on No radio button',()=>{
    page2.psychiatricTreatment()
})
Then('If user follow only vegetarian diet click on YES radio button, Otherwise click on NO button',()=>{
    page2.vegetarianDiet()
})
Then('If user any other issues,difficulties type on that input field',()=>{
    page2.issuesInput()
})
Then('If user programs done Past one year select Yes, Otherwise select No',()=>{
    page2.Programs()
})
Then('If user click on yes we have to open one input field, We have enter course date,venue and Teacher name',()=>{
    page2.Details()
})
Then("user heard in past 1 year from the date of application select atmost one check box and also user want to uncheck the box again click on that checkBox",()=>{
page2.heardPrograms()
});
Then('user read in past 1 year from the date of application select atmost one check box and also user want to uncheck the box again click on that checkBox',()=>{
    page2.readPrograms()
})
Then('user want to navigate to next page click on Next button in page2',()=>{
    page1.nextButton()
})
Then('user save the data until fields are filled click on Save button, It stores the data in the database in page-2',()=>{
    page4.saveButton()
})
Then('user want to navigate to previous page in page2 click on previous button. It should navigate to page-1',()=>{
    page4.PreviousButton()
})

// Page-3

Then('first check the default date it is {string} present or not in date input field and click on calendar it shows the default date in page3',()=>{
    page1.checkDefaultDob();
});
Then('the date input field it does not contain any date then user click on calendar it shows the today date in page3',()=>{
  cy.get('input[type="tel"]')
 .get('[value="01/01/1900"]').should('have.value','01/01/1900').clear()  
})
Then('user want to select the date click on the calendar icon and user click on calendar icon it shows the today date in page3',()=>{
    page1.calendar();
})
Then('user want to select the year, click on dropdown after open a calendar and then select the year in page3',()=>{
     page1.yearDropdown();
})
Then('user want to select previous month click on left arrow in page3',()=>{
    page1.previousMonth()
})
Then('user want to select next month click on right arrow in page3',()=>{
    page1.NextMonth()
})
Then('user want to select date after selection of month click numbers on that month in page3',()=>{
    page1.selectDates()
})
Then('user want to enter date manually, user can type the date in date format {string} in page3',()=>{
    page1.manuallyDateType()
})
Then("user select the only one option either full time OR part time", () => {
  page3.typeOfJob();
});
Then('user have any Programs taught type on Programs taught input field, It accept only string, does not enter any value it shows an error Program taught field is required',()=>{
    page3.programsTaught()
})
Then('enter no.of happiness programs conducted. It accept only a number, user does not enter any value it shows an error Number of happiness programs field is required',()=>{
    page3.happinessPrograms()
})
Then('enter no.of participants. It accept only a number, user does not enter any value it shows an error Number of participant field is required',()=>{
    page3.noofParticipants()
})
Then("user want to navigate to next page click on Next button in page3 and then navigate to page-4",() => {
    page1.nextButton();
  }
);
Then('user save the data until fields are filled click on Save button, It stores the data in the database in page-3',()=>{
    page4.saveButton()
})
Then('user want to navigate to previous page in page3 click on previous button. It should navigate to page-2',()=>{
    page4.PreviousButton()
})

//Page-4
Then('user practice sahaj samadhi meditation select by daily or weekly or monthly. User select only one radio button at a time.',()=>{
    page4.sahajMeditation()
})
Then('next contain one gurupuja phase-1 input. user enter Gurupuja phase-1 details in that input like: course date,venue,teacher name.',()=>{
page4.guruPujaPhase1()
})
Then('next contain one gurupuja phase-1 input. user enter Gurupuja phase-2 details in that input like: course date,venue,teacher name.',()=>{
page4.guruPujaPhase2()
})
Then('next contain one guru puja count input field. User enter guru puja count. It accept only integers',()=>{
    page4.guruPujaDone()
})
Then('user want to clear the value of gurupuja input field or does not enter the any value. It shows an error',()=>{
 page4.clearGuruPujaDone()
})
Then('user thorough with Guru Puja chanting, Meaning and Performance select Yes. Otherwise, select No',()=>{
page4.guruPujaChanting()
})
Then('contain one Gurupuja Audio Link input field. It accept must be url. Otherwise, It show an error',()=>{
page4.guruPujaAudioLink()
})
Then('also contain one Gurupuja video link input field. It accept must be url. Otherwise, It show an error',()=>{
page4.guruPujaVideoLink()
})
Then('also contain one alert icon. User click on that icon. It shows instructions to upload the audio link and video link.',()=>{
page4.alertIcon()
})
Then('contain no.of sahaj samadhi programs organized input field. User enter only integers. It accept only integers.',()=>{
page4.NoOfSahajSamadhiProgramsOrganized()
})
Then('contain no.of Participants Registered for Sahaj Samadhi Meditation input field. User enter only integers. It accept only integers.',()=>{
page4.NoOfParticipantesRegistered()
})
Then('the above two inputs accept only integers and user want to clear or does not enter any value. It shows an error',()=>{

})
Then('one reason input field, Why would you like to become a Sahaj Samadhi Meditation Program teacher.User want to clear the input or does not enter any text it shows an error',()=>{
page4.teacherContent()
})
Then('contain Teacher details Name of teacher. It accept string and integers. User want to clear the data in input field or does not enter any text it shows an Error',()=>{
page4.teacherName()
})
Then('Teachers email Address',()=>{
page4.teacherEmail()
})
Then('Teacher code. It accept all integers,string,Special characters.',()=>{
page4.techaerCode()
})
Then('one Declaration Check box',()=>{
page4.declaration()
})
Then('contains three buttons previous,Save,Submitbutton',()=>{

})
Then('user click on previous button move to previous page',()=>{
page4.PreviousButton()
})
Then('user save the data until fields are filled click on Save button in page-4, It stores the data in the database',()=>{
page4.saveButton()
})
Then("user filled all fields in the applicantion form click on Submitbutton it submit the applicantion.Otherwise show an error.Please filled the required fields at the top of the page",
  () => {
    page4.submitButton();
  }
);


