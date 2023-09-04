import generateRandomThoughts from "./ProgramsThought";

class sahajPage3 {
  typeOfJob() {
    cy.get("#teacher-type-dropdown")
      .click()
      .get('[role="listbox"]')
      .contains("Part Time")
      .click();
    cy.get("#teacher-type-dropdown")
      .click()
      .get('[role="listbox"]')
      .contains("Full Time")
      .click();
  }
  programsTaught() {
    cy.get("#programs-taught-field-input").should("be.empty").clear();
    cy.get("#programs-taught-field-input")
      .type(generateRandomThoughts())
      // .should("have.value", Cypress.sinon.match.string)
      .invoke("val").then(email=>{  
        const containsCapitalLetters = /[A-Z][a-z]/.test(email);

        // Assert the result using Cypress
        cy.wrap(containsCapitalLetters).should("be.true",'Email input should contain capital letters')
      }).wait(2000)
      // .should((value) => {
      //   expect(Number.isNaN(+value), "input should accept only string").to.eq(true);
      // });
    //   clear the input value
    cy.get("#programs-taught-field-input")
      .should("be.empty")
      .clear()
      .get("#programs-taught-field-input-helper-text")
      .should("contain.text", "Program taught field is required");

    //type not a string
    const randomProgram = Math.random().toString(16).substring(2, 15);
    cy.get("#programs-taught-field-input").should("be.empty").clear();
    cy.get("#programs-taught-field-input")
      .type(randomProgram)
      .then(email=>{  
        const containsCapitalLetters = /[A-Z][a-z]/.test(email);

        // Assert the result using Cypress
        cy.wrap(containsCapitalLetters).should("be.true",'Email input should contain capital letters')
      }).wait(2000)
      // .should("have.attr", Cypress.sinon.match.string, randomProgram)
      .get("#programs-taught-field-input-helper-text")
      .should("contain.text", "must be string ")
      // .invoke("val")
      // .should((value) => {
      //   expect(Number.isNaN(+value), "input contains only string").to.eq(false);
      // });

    //   again filled the input
    cy.get("#programs-taught-field-input").should("be.empty").clear();
    cy.get("#programs-taught-field-input")
      .type(generateRandomThoughts())
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should accept only string").to.eq(true);
      });
  }
  happinessPrograms() {
        // check the input field is empty or not
     cy.get("#hp-last-year-count-field-input").should("be.empty").clear();

    // type no.of happiness programs
    cy.get("#hp-last-year-count-field-input").type("23").invoke("val").should((value) => {
        expect(Number.isNaN(+value),"input must be accept only a number").to.eq(false);
      }).wait(2000);
    // clear the input
    cy.get("#hp-last-year-count-field-input").should("be.empty").clear()
      .get("#hp-last-year-count-field-input-helper-text")
      .should("contain", "Number of happiness programs field is required").wait(2000);
    // again type
    cy.get("#hp-last-year-count-field-input").type("56").invoke("val").should((value) => {
        expect(Number.isNaN(+value),"input must be accept only a number").to.eq(false);
      })
      .wait(2000);
  }

  noofParticipants() {
    // check the input field is empty or not
     cy.get("#pax-last-year-count-field-input").should("be.empty").clear();
 const randomnumber = Math.random().toString(16).substring(2, 15)
 cy.get("#pax-last-year-count-field-input").type(randomnumber);
    // type no.of happiness programs
    cy.get("#pax-last-year-count-field-input").type("23").invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value),"input must be accept only a number").to.eq(false);
      }).wait(2000);
    // clear the input
    cy.get("#pax-last-year-count-field-input").should("be.empty").clear()
      .get("#pax-last-year-count-field-input-helper-text")
      .should("contain", "Number of participant field is required").wait(2000);
    // again type
    cy.get("#pax-last-year-count-field-input").type("26").invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value),"input must be accept only a number").to.eq(false);
      })
      .wait(2000);
  }
}
export default sahajPage3;
