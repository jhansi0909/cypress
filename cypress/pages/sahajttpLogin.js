import sahajData from '../fixtures/sahajttp.json'
import generateValidRandomEmail from './GmailRegex';
import generateValidRandomPassword from './PasswordRegex';
class sahajLogin {
  navigate() {
    cy.fixture("sahajttp.json").then((data) => {
      cy.visit(data.sahajTtpUrl, { timeout: 5000 });
      cy.log(data.sahajTtpUrl)
    });
  }

  successLogin() {
    cy.get('[type="text"]').type(sahajData.validEmail);
    cy.get("#password-input").type(sahajData.validPassword);
    cy.get("#country-dropdown").click()
      .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
      .scrollTo("bottom", { duration: 100 }).contains("Canada").click({ duration: 1000 });
    cy.get("#login-submit-button").click();
    cy.wait(4000);
  }

  failedLogin() {
    // cy.get('[type="text"]').type("testca@yopmail.com");
    
    // const randomEmail=Math.random().toString(16).substring(2,15)+"@gmail.com"
    cy.get("#email-input").should('be.empty')
    .type(generateValidRandomEmail()).invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should be a number and string and special characters").to.eq(true)
      })
    cy.get("#password-input").type(sahajData.validPassword);
    cy.get("#country-dropdown").click()
      .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
      .scrollTo("bottom", { duration: 100 }).contains("Canada").click({ duration: 1000 });
    cy.get("#login-submit-button").click();
    cy.get('[role="dialog"]').contains("Invalid Email/Password/Country Name");
    cy.wait(2000);
  }

  failedLogin1() {
      const randomEmail=Math.random().toString(16).substring(2,15)+"gmail.com"
    cy.get("#email-input").should("be.empty").type(randomEmail).invoke("val")
      .should((value) => {
        expect(
          Number.isNaN(+value),
          "input should be a number and string and special characters"
        ).to.eq(true);
      });
    // cy.get('[type="text"]').type("test.cayopmail.com");
    cy.contains("Email must be a valid email");
    cy.get("#password-input").type(sahajData.validPassword);
    cy.get("#country-dropdown").click()
      .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
      .scrollTo("bottom", { duration: 100 }).contains("Canada").click({ duration: 1000 });
    cy.get("#login-submit-button").click()
    // cy.get('[role="dialog"]').contains("Invalid Email/Password/Country Name");
    cy.wait(2000);
  }

  failedLogin2() {
    cy.get('#email-input').should('be.empty')
    cy.get('#password-input').should("be.empty");
    cy.get("#login-submit-button").click();
        cy.get("#email-input-helper-text").contains("Email is a required field");
        cy.get('#password-input-helper-text').contains("Password is a required field");
    cy.wait(2000)
     cy.get("#login-submit-button").click();
    //  cy.get('[role="dialog"]').contains("Invalid Email/Password/Country Name");
  }

  wrongPwd() {
      // const randomEmail=Math.random().toString(16).substring(2,15)+"gmail.com"+
    cy.get("#email-input").should('be.empty')
    .type(sahajData.validEmail)
     .invoke("val").should((value) => {
        expect(Number.isNaN(+value), "input should be a number and string and special characters").to.eq(true)
      })
    cy.get("#password-input").type(generateValidRandomPassword());
    cy.get("#password-input").should('be.empty','').clear()
    .get("#password-input-helper-text").contains('Password is a required field')
    cy.get("#country-dropdown").click()
      .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
      .scrollTo("bottom", { duration: 100 }).contains("Canada").click({ duration: 1000 });
    cy.get("#login-submit-button").click();
    // cy.get('[role="dialog"]').contains("Invalid Email/Password/Country Name");
    cy.wait(2000);
  }

  wrongCountry() {
    cy.get('[type="text"]').type(sahajData.validEmail);
    cy.get("#password-input").type(sahajData.validPassword);
    cy.get("#country-dropdown").click()
      .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
      .scrollTo("bottom", { duration: 100 }).contains("Austria").click({ duration: 1000 });
    // cy.get("#login-submit-button").click();
    // cy.get('[class="swal-text"]').contains("Invalid Email/Password/Country Name");
     cy.get("#login-submit-button").click();
    cy.get('[role="dialog"]').contains("Invalid Email/Password/Country Name");
    cy.wait(4000);
  }
   invalidEmail() {
    cy.get('[type="text"]').type(sahajData.validEmail);
    cy.get("#password-input").type(sahajData.validPassword);
    cy.get("#country-dropdown").click()
      .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
      .scrollTo("bottom", { duration: 100 }).contains("Austria").click({ duration: 1000 });
     cy.get("#login-submit-button").click();
     cy.get('[role="dialog"]').contains("Invalid Email/Password/Country Name");
    cy.wait(4000);
  }


}
export default sahajLogin;
