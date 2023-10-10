
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import DateTime from "@pages/files/step3";
import currentDate from "@pages/regularExpression/currentdategenerate";
import generateRandomDate from "@pages/regularExpression/generateRandomdate";
const dateAndTime=new DateTime

// Variables to store calendar-related information
let isCalendarOpen = false;
let isMonthDropdownOpen = false;
let isYearDropdownOpen = false;
let selectedDate = "";
let selectedMonth = "";
let selectedYear = "";

// Step Definitions
When('the user verifies that the calendar icon is present',()=>{
dateAndTime.verifyCalendar()
 isCalendarOpen = true;
})

When("the user clicks on the calendar icon", () => {
    cy.get('#calendar-icon').click()
    assert.isTrue(isCalendarOpen, "Calendar should be open");
});

Then("the calendar should open", () => {
    assert.isTrue(isCalendarOpen, "Calendar should be open");
});
// When('the user verifies that the calendar displays the current date',()=>{
//     console.log(currentDate(), "current date isssssss");
// cy.get('[class="react-datepicker__month"]').get('[class="react-datepicker__day react-datepicker__day--029 react-datepicker__day--keyboard-selected react-datepicker__day--today"]')
// .should(currentDate())
// console.log(currentDate(),"current date isssssss")
// })
When('the user verifies the left arrow and right arrow',()=>{
dateAndTime.verifyArrows()
})
When('the user click on the left arrow we have to move previous month',()=>{
dateAndTime.leftArrow()
})
When('the user click on the right arrow we have to move next month',()=>{
dateAndTime.rightArrow()
})

When('the user verifies the presence of the "months" dropdown',()=>{
dateAndTime.verifyMonthDropdown()
isMonthDropdownOpen=true
})

When('the user clicks on the {string} dropdown', () => {
    dateAndTime.clickMonthDropdown()

});

Then("the months dropdown should open", () => {
     assert.isTrue(isMonthDropdownOpen, "month should be open");

});

When('the user verifies the presence of the "years" dropdown',()=>{
    dateAndTime.verifyYearDropdown()
    isYearDropdownOpen=true
})

When('the user clicks on the "years" dropdown', () => {
    dateAndTime.clickYearDropdown()
});

Then("the years dropdown should open", () => {
      assert.isTrue(isYearDropdownOpen, "years should be open");
});
When('the user verifies the presence of the left and right arrows',()=>{
  dateAndTime.verifyYearArrows()
})
When('the user clicks on the "left arrow". the years dropdown should display previous years', () => {
 dateAndTime.clickLeftArrow()
});


When('the user clicks on the "right arrow". the years dropdown should display next years', () => {
dateAndTime.clickRightArrow()
});
When('the user selects a month from the dropdown',()=>{
    // cy.get('[class="absolute"]').should('be.visible')
    // console.log("helooooo")
    dateAndTime.selectMonth()
})
When('user select the date',()=>{
    dateAndTime.selectDate()
})
When('user check the changes color to {string}',()=>{
    cy.get('[class="flex items-center"]').should('have.css','border-color','rgb(229, 231, 235)')
})
Then('user click day {string} and select the {string} to {string} time', (day, time1, time2) => {
    let hh1 = time1.split(":")[0];
    let mm1 = time1.split(":")[1];
    let hh2 = time2.split(":")[0];
    let mm2 = time2.split(":")[1];
    cy.contains(`Día ${day}`).parent('div').parent('div').then(body => {
        cy.get(body).find('[placeholder="hh"]').eq(0).click().type(+hh1);
        cy.get(body).find('[placeholder="mm"]').eq(1).click().type(+mm1);
        cy.get(body).find('[placeholder="hh"]').eq(1).click().type(+hh2);
        cy.get(body).find('[placeholder="mm"]').eq(2).click().type(+mm2);
    })

})
Then('user click on {string} clender and select +{string} from the current date', (day, selectDate) => {
    let days = dateAndTime.getFutureDate(+selectDate, "DD-MM-YY")
    cy.log(days, "*****");
    let date = days.split("-");
    cy.contains(`Día ${day}`).parent('div').parent('div').then(body => {
        cy.get(body).find('[placeholder="dd"]').eq(0).click().type(+date[0]);
        cy.get(body).find('[placeholder="mm"]').eq(0).click().type(+date[1]);
        cy.get(body).find('[placeholder="yy"]').eq(0).click().type(+date[2]);
    })
})
When('user check day {string} and click "-" icon we have to delete the total day',(day)=>{
    cy.contains(`Día ${day}`).parent('div').parent('div').then(body => {
    cy.get(body).get('[class="w-[25px] h-[25px]  text-[#FF5858]  cursor-pointer"]').click()
    })

})
When('user check day {string} and click "X" icon we have clear the data on that day',(day)=>{
    cy.contains(`Día ${day}`).parent('div').parent('div').then(body => {
      cy.get(body).get('[class="w-7 cursor-pointer text-red"]').click();
    //   cy.get(body).find('[placeholder="dd"]').eq(0).invoke(val).should("be.empty");
    //   cy.get(body).find('[placeholder="mm"]').eq(0).should("be.empty");
    //   cy.get(body).find('[placeholder="yy"]').eq(0).should("be.empty");
    //   cy.get(body).find('[placeholder="hh"]').eq(0).should("be.empty");
    //   cy.get(body).find('[placeholder="mm"]').eq(1).should("be.empty");
    //   cy.get(body).find('[placeholder="hh"]').eq(1).should("be.empty");
    //   cy.get(body).find('[placeholder="mm"]').eq(2).should("be.empty");
    })
})
// check all the data are clear or not when i click the cross icon.
When('user verify the {string} all the data are clear or not user click on {string} icon',(day)=>{
     cy.contains(`Día ${day}`).parent('div').parent('div').then(body => {
         cy.get(body).find('[placeholder="dd"]').eq(0).invoke("val").should('have.value','be.empty')
         cy.get(body).find('[placeholder="mm"]').eq(0).invoke("val").should('have.value','be.empty')
         cy.get(body).find('[placeholder="yy"]').eq(0).invoke("val").should('have.value','be.empty')
     cy.get(body).find('[placeholder="hh"]').eq(0).invoke("val").should('have.value','be.empty')
     cy.get(body).find('[placeholder="mm"]').eq(1).invoke("val").should('have.value','be.empty')
     cy.get(body).find('[placeholder="hh"]').eq(1).invoke("val").should('have.value','be.empty')
     cy.get(body).find('[placeholder="mm"]').eq(2).invoke("val").should('have.value','be.empty')
    })
})