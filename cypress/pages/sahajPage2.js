const check= [0,1,2,3,4,5]
const defaultCheck=[0,3,4]
const heardPrograms=[6,7,8,9]
const readPrograms=[10,11,12]
import sahajData from '../fixtures/sahajttp.json'
const radio = sahajData.radioButtons;
console.log(check,"heloooooooooooo");
import getRandomDate from './DateRegex';
import generateTeacherName from './TeacherName'

const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const courseDetails =getRandomDate() + "," + generateTeacherName() + "," + generateTeacherName();
class SahajPage2 {
  checkBoxes() {
    cy.get("#checkboxs")
      .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (check.includes(index)) {
          cy.wrap($checkBox).check();
        }
      }).wait(2000)
  }
  unCheck() {
    cy.get("#checkboxs")
      .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (defaultCheck.includes(index)) {
          cy.wrap($checkBox).uncheck();
        }
      }).wait(2000)
      .each(($checkBox, index) => {
        if (check.includes(index)) {
          cy.wrap($checkBox).uncheck();
        }
      })
      .get("#checkboxs")
      .get("#checkbox-error").should('contain.text','Please select one')
      // .contains("Please select one");
    // again checked
    cy.get("#checkboxs")
      .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (check.includes(index)) {
          cy.wrap($checkBox).check();
        }
      });
  }

  //check all the checkboxes are checked or not present in that page

  // checkBoxes(){
  //   cy.get('#checkboxs input[type="checkbox"]')
  //   .as('checkboxes').check()

  //   cy.get('@checkboxes').each(checkBox=>{
  //     expect(checkBox[0].checked).to.equal(true)
  //   })
  // }

  medicalTreatment() {
    cy.get("#medical-radiogroup").get('input[type="radio"]').get('[value="true"]').eq(0).click().wait(2000)
    cy.get("#medical-radiogroup").get('input[type="radio"]').get('[value = "false"]').eq(0).click();
  }
  psychiatricTreatment(){
    cy.get("#psychiatric-label").get('input[type="radio"]').get('[value="true"]').eq(1).click().wait(2000)
    cy.get("#psychiatric-label").get('input[type="radio"]').get('[value = "false"]').eq(1).click();
  }
    vegetarianDiet(){
    cy.get("#vegetarian-label").get('input[type="radio"]').get('[value="true"]').eq(2).click().wait(2000)
    cy.get("#vegetarian-label").get('input[type="radio"]').get('[value = "false"]').eq(2).click();
  }
  issuesInput(){
    cy.get('#issuses-input').type("heloo")
  }
  Programs(){
    // part-2
    cy.get('#advancefields').get('#part2-radiogroups').get('input[type="radio"]').get('[value="true"]').eq(3).click().wait(2000)
    cy.get("#advancefields").get('#part2-radiogroups').get('input[type="radio"]').get('[value = "false"]').eq(3).click();

// blessing program
   cy.get('#advancefields').get('#blessing-radiogroups').get('input[type="radio"]').get('[value="true"]').eq(4).click().wait(2000)
    cy.get("#advancefields").get('#blessing-radiogroups').get('input[type="radio"]').get('[value = "false"]').eq(4).click();

    // sanyam program
       cy.get('#advancefields').get('#sanyam-radiogroup-field').get('input[type="radio"]').get('[value="true"]').eq(5).click().wait(2000)
    cy.get("#advancefields").get('#sanyam-radiogroup-field').get('input[type="radio"]').get('[value = "false"]').eq(5).click();
  }
  Details(){
      // part-2
    cy.get('#part2-field').get('#part2-radiogroups').get('input[type="radio"]').get('[value="true"]').eq(3).click().wait(2000)
    .get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[placeholder="Course date, Venue, Teacher Name"]').eq(0)
    .type(courseDetails)
// blessing program
     cy.get('#advancefields').get('#blessing-radiogroups').get('input[type="radio"]').get('[value="true"]').eq(4).click().wait(2000)
    .get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[placeholder="Course date, Venue, Teacher Name"]').eq(1)
    .type(courseDetails)
// sanyam program
       cy.get('#advancefields').get('#sanyam-radiogroup-field').get('input[type="radio"]').get('[value="true"]').eq(5).click().wait(2000)
    .get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[placeholder="Course date, Venue, Teacher Name"]').eq(2)
    .type(courseDetails)
  }
  heardPrograms(){
    // check
    cy.get('#heard').get('[class="flex flex-col flex-wrap pl-3  h-[120px] w-[320px]"]')
     .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (heardPrograms.includes(index)) {
        cy.wrap($checkBox).check();
        }
      }).wait(2000);
// uncheck
       cy.get("#heard")
         .get('[class="flex flex-col flex-wrap pl-3  h-[120px] w-[320px]"]')
         .get('input[type="checkbox"]')
         .each(($checkBox, index) => {
           if (heardPrograms.includes(index)) {
             cy.wrap($checkBox).uncheck();
           }
         })
         .get("#heard")
         .get("#checkboxs")
         .get('[class="text-[12px] ml-[285px] -mt-[24px] mb-4 text-[#D43535]"]').should('contain.text',"Please select one")
// again checked
 cy.get('#heard').get('[class="flex flex-col flex-wrap pl-3  h-[120px] w-[320px]"]')
  .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (heardPrograms.includes(index)) {
        cy.wrap($checkBox).check();
        }
      }).wait(2000);
  }

  readPrograms(){
     // check
    cy.get('#read').get('[class="flex flex-col flex-wrap pl-3  h-[120px] w-[210px]"]')
     .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (readPrograms.includes(index)) {
        cy.wrap($checkBox).check();
        }
      }).wait(2000);
// uncheck
       cy.get("#read")
         .get('[class="flex flex-col flex-wrap pl-3  h-[120px] w-[210px]"]')
         .get('input[type="checkbox"]')
         .each(($checkBox, index) => {
           if (readPrograms.includes(index)) {
             cy.wrap($checkBox).uncheck();
           }
         })
         .get("#read")
         .get("#checkboxs")
         .get('[class="text-[12px] ml-[285px] -mt-[24px] mb-4 text-[#D43535]"]').should('contain.text','Please select one')
        //  .get("#checkbox-error")
        //  .should("contain", "Please select one");
// again checked
 cy.get('#read').get('[class="flex flex-col flex-wrap pl-3  h-[120px] w-[210px]"]')
  .get('input[type="checkbox"]')
      .each(($checkBox, index) => {
        if (readPrograms.includes(index)) {
        cy.wrap($checkBox).check();
        }
      }).wait(2000);
  }
}

export default SahajPage2