import { default as Gender, default as dates } from "../fixtures/sahajttp.json";
import generateValidRandomEmail from "./GmailRegex";
// import generateValidRandomPassword from './PasswordRegex';
import sahajData from "../fixtures/sahajttp.json";
import getRandomDate from "./DateRegex";
import generateRandomName from "./NameRegex";
import randomPhoneNumber from "./PhonenumRegex";
import generateValidRandomAddress from "./addressRegex";

// const email= generateValidRandomEmail

class sahajPage1 {
  navigate() {
    cy.fixture("sahajttp").then((data) => {
      cy.visit(data.sahajTtpUrl);
    });
  }

  successLogin() {
    cy.get("#email-input").type(sahajData.validEmail);
    cy.get("#password-input").type(sahajData.validPassword);
    cy.get("#country-dropdown")
      .click()
      .get(
        '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]'
      )
      .scrollIntoView()
      .contains("Canada")
      .click();
    cy.get("#login-submit-button").click();
    cy.wait(4000);

    //negitive testing

    // const randomEmail=Math.random().toString(16).substring(2,15)+"@gmail.com"
    // cy.get("#email-input").should('be.empty')
    // .type(generateValidRandomEmail())
    //  .invoke("val")
    //   .should((value) => {
    //     expect(Number.isNaN(+value), "input should be a number and string and special characters").to.eq(true)
    //   })

    // cy.get('[type="text"]').type("test.ca@yopmail.com");

    // cy.get(".MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input").click();
    // cy.get('.MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list').get('[data-value="1"]').eq('Sahaj Samadhi Meditation TTP').click()
    // cy.get('[type="submit"]').contains("Apply").click();
  }

  clickSelectTtpDropdown() {
    cy.contains("Resume Application").click();

    //  cy.get('[role="button"]').click()
    //  cy.get(".MuiFormControl-root css-1nrlq1o-MuiFormControl-root").click()
    // cy.get('.MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input').click();
  }

  selectOneCourse() {
    // cy.get('ul[role="listbox"]').eq(0).click()
    // eq(1).click();
    // cy.get('[data-value="1"]').click()
    // cy.get('[role="button"]').should('have.value','');
    // eq('Sahaj Samadhi Meditation TTP').click()
  }

  clickApplyButton() {
    // cy.get('[type="submit"]').contains("Apply").click();
  }

  //top of the form
  top() {
    // cy.get(".p-5 bg-[#EDE6E6] mt-4")
    // .get('[height="1em"]').contains('[class="w-[35px] h-[35px]"]');
    // cy.contains('[class="p-5 bg-[#EDE6E6] mt-4 "]');
    // cy.get('[class="w-[35px] h-[35px]"]')
    //   .should("be.visible")
    cy.contains("TTC Application").should(eq, "TTC Application");
    //  cy.get(".text-[28px] font-bold")
    //   .eq("TTC Application")
    cy.get("flex items-center justify-center w-[730px] pt-1").contains(
      "Note: This TTC Application from should be filled by TTC applicants only. Please answer all questions truthfully and with detail and clarity. Your responses will remain confidential and will only be reviewed by the TTC Trainers and TTC desk team"
    );
  }

  //step navigator
  stepNavigator() {
    cy.get('[class="Steps w-auto m-auto mt-[9px] p-5"]')
      .get('[class="step"]')
      .contains("1");
  }

  //applicant name
  // applicantName() {
  //   cy.get("#applicant-name-label").eq("{string}");
  // }

  // Page-1

  applicantInputField() {
    // const randomApplicantName = Math.random().toString(16).substring(2, 15)
    // cy.get("#applicant-name-input").should("be.empty").clear();
    cy.get("#applicant-name-input")
      // console.log(generateRandomName)
      .type(generateRandomName())
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be String,number and also a special characters"
        ).to.eq(true);
      }).wait(2000)
    cy.get("#applicant-name-input")
      .should("be.empty")
      .clear()
      .get("#applicant-name-input-helper-text")
      .wait(2000);
    cy.get("#applicant-name-input")
      .type(generateRandomName())
      .invoke("val")
      .wait(2000)
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be String,number and also a special characters"
        ).to.eq(true);
      });
  }

  checkDefaultDob() {
    cy.get('input[type="tel"]')
      .should("have.value", "01/01/1900").wait(2000)
      // cy.get('input[type="tel"]')
      //   .get('[value="01/01/1900"]')
      // .should("have.value", "01/01/1900")
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and special characters"
        ).to.eq(true);
      });

    // open the calender default date is displayed
    cy.get('[data-testid="CalendarIcon"]')
      .click()
      // .contains('[class="MuiCalendarPicker-root css-169iwlq-MuiCalendarPicker-root"]')
      .wait(2000);
  }

  calendar() {
    cy.get('[data-testid="CalendarIcon"]').click();
  }

  yearDropdown() {
    cy.get('[aria-label="calendar view is open, switch to year view"]')
      .click()
      // .get(".MuiYearPicker-root css-x1wgng-MuiYearPicker-root")
      .get(
        '[class="PrivatePickersFadeTransitionGroup-root MuiCalendarPicker-viewTransitionContainer css-1wvgxus-MuiCalendarPicker-viewTransitionContainer"]'
      )
      // .scrollTo("bottom", { duration: 5000 })
      .scrollIntoView()
      .get('[class="MuiYearPicker-root css-x1wgng-MuiYearPicker-root"]')
      .contains(2000)
      .wait(2000)
      .click({ force: true });
    // .get("[.PrivatePickersFadeTransitionGroup-root MuiCalendarPicker-viewTransitionContainer css-1wvgxus-MuiCalendarPicker-viewTransitionContainer]");
  }
  previousMonth() {
    cy.get('button[aria-label="Previous month"]').click().wait(2000)
  }
  NextMonth() {
    cy.get('button[aria-label="Next month"]').click().wait(2000)
  }
  selectDates() {
    cy.get('[role="rowgroup"]')
      .contains(dates.calendarDates[8])
      .click()
      .wait(2000);
  }
  manuallyDateType() {
    cy.get('input[type="tel"]').should("be.empty").clear();
    // cy.get('[placeholder="mm/dd/yyyy"]').clear();
    cy.get('[placeholder="mm/dd/yyyy"]')
      .type(getRandomDate())
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and special characters"
        ).to.eq(true);
      });
  }
  genderSelection() {
    cy.get("#gender-radiogroup")
      .contains(Gender.gender[2])
      .click()
      .should("have.value", "");
  }
  addressType() {
    cy.get("#address-input")
      .type(sahajData.address)
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and string and special characters"
        ).to.eq(true);
      });
    cy.get("#address-input")
      .clear()
      .get("#address-input-helper-text")
      .wait(1000);
    cy.get("#address-input")
      .type(generateValidRandomAddress())
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and string and special characters"
        ).to.eq(true);
      });
  }
  countrySelection() {
    cy.get("#page1-country-dropdown")
      .click()
      // .get('.MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper')
      .get('ul[role="listbox"]')
      .scrollIntoView()
      .contains("India")
      .click();
    // .contains('Argentina').click()
    cy.get("#page1-country-dropdown").should("have.value", "");
  }
  selectState() {
    cy.get("#state-dropdown").should("have.value", "");
    cy.get("#state-dropdown")
      .click()
      .get(
        '[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]'
      )
      // .scrollTo("bottom", { duration: 1000 })
      .get('[role="listbox"]')
      .scrollIntoView()
      // .get('.MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list')
      .get('[data-value="Andhra Pradesh"]')
      .click()
      .should("have.value", 0)
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should be String").to.eq(false);
      });
  }
  cityEnter() {
    cy.get("#city-input").should("be.empty").clear();
    cy.get("#city-input").should("have.value", "");
    cy.get("#city-input")
      .type("Guntur")
      .invoke("val")
       .then(city=>{  
        const containsString = /[A-Z][a-z]/.test(city);

        // Assert the result using Cypress
        cy.wrap(containsString).should("be.true",'city input should contain string')
      }).wait(2000)
      .should((value) => {
        expect(Number.isNaN(+value), "input should be String").to.eq(false);
      });
      
      // enter not a string it show an error 
    const randomCity = Math.random().toString(16).substring(2, 15);

    cy.get("#city-input").should("be.empty").clear();
    cy.get("#city-input")
      .type(randomCity).then(city=>{  
        const containsString = /[A-Z][a-z]/.test(city);

        // Assert the result using Cypress
        cy.wrap(containsString).should("be.true",'city input should contain string')
      }).get("#city-input-helper-text").wait(2000)

    //   .invoke("val")
    //   .should((value) => {
    //     expect(Number.isNaN(+value), "input should be String").to.eq(false);
    //   });
    cy.get("#city-input")
      .should("be.empty")
      .clear()
      .get("#city-input-helper-text");
    cy.get("#city-input")
      .type("Guntur")
      .invoke("val")
      .should((value) => {
      expect(Number.isNaN(+value), "input should be String").to.eq(true);
      });
  }
  postalCode() {
    const randomPostalCode = Math.random().toString(16).substring(2, 15);
    cy.get("#postal-input")
      .should("have.value", "")
      .type(randomPostalCode)
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value),"input should be a number and also string").to.eq(true);
      });
    cy.get("#postal-input").should("be.empty").clear();
    cy.get("#postal-input-helper-text");
    cy.get("#postal-input")
      .type(randomPostalCode)
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and also string"
        ).to.eq(true);
      });
  }

  emailInput() {
    cy.get("#email-input")
      .should("be.empty")
      .type(generateValidRandomEmail())
      .invoke("val")
      .then(email=>{  
        const containsCapitalLetters = /[A-Z]/.test(email);

        // Assert the result using Cypress
        cy.wrap(containsCapitalLetters).should("be.true",'Email input should contain capital letters')
      }).wait(2000)
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and string and special characters"
        ).to.eq(false);
      });
    cy.get("#email-input").should("be.empty").clear();
    const randomEmail =
      Math.random().toString(16).substring(2, 15) + "gmail.com";
    cy.get("#email-input")
      .type(randomEmail)
      .get("#email-input-helper-text")
      .wait(2000);
    cy.get("#email-input")
      .should("be.empty")
      .clear()
      .type(generateValidRandomEmail())
      .invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and string and special characters"
        ).to.eq(true);
      });
  }

  phoneNumber() {
    cy.get("#phone-input")
      .should("be.empty")
      .type(randomPhoneNumber)
      .invoke("val")
      .then((value) => {
        console.log(value.length);
        console.log("helooooo");
        if (value.length < 7) {
          console.log(value.length);
          cy.get("#phone-input")
            .type(randomPhoneNumber)
            .get("#phone-input-helper-text")
            .contains("phone must be at least 7 characters");
        } else if (value.length > 11) {
          cy.get("#phone-input")
            .get("#phone-input-helper-text")
            .contains("phone must be at most 11 characters");
        } else if (value.length == 0) {
          cy.get("#phone-input")
            .get("#phone-input-helper-text")
            .contains("phone must be at least 7 characters");
        } else {
          cy.get("#phone-input");
        }
      });
    // .then((value)=>{
    // console.log(value.length)
    // if(val.length<7){
    //   console.log(val.length);
    // cy.get("#phone-input").get("#phone-input-helper-text").contains("phone must be at least 7 characters")
    //   }
    //   else if(val>11){
    // cy.get("#phone-input").get("#phone-input-helper-text").contains("phone must be at most 11 characters")
    // }
    // else if(val==0){
    //   cy.get("#phone-input").get("#phone-input-helper-text").contains("phone must be at least 7 characters")
    // }
    // else{
    //   cy.get("#phone-input")
    // }
    // })

    //     cy.should((value) => {
    //       expect(Number.isNaN(+value), "input should be a number").to.eq(false);
    //     })
    //   cy.get("#phone-input").should("be.empty").clear()
    //    cy.get("#phone-input").type(randomPhoneNumber).get("#phone-input-helper-text").contains('must be a valid phone number')
    //   cy.get("#phone-input")
    //     .type(randomPhoneNumber)
    //     .get("#phone-input-helper-text").contains("phone must be at least 7 characters")
    //     .wait(2000)
    //   cy.get("#phone-input")
    //     .type(randomPhoneNumber)
    //     .get("#phone-input-helper-text").contains("phone must be at most 11 characters")
    //     .wait(2000)
    //   cy.get("#phone-input").should("be.empty").clear()
    //   cy.get("#phone-input").should("be.empty").type("6305992428")
  }

  nextButton() {
    // cy.get('. bg-gray-300 text-center rounded-[5px] mb-3')
    cy.contains("Next").click();
  }

  saveButton() {
    cy.get(". bg-gray-300 text-center rounded-[5px] mb-3")
      .contains("Save")
      .click();
  }

  // Page-2
}
export default sahajPage1;
