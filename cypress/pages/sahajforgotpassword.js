class ForgotPassword {
  forgotPassword() {
    cy.get("#forgot-password").click();
  }
  forgotValidDetails(){
    cy.get("#forgotpage-email-input").type(sahajData.validEmail)
    cy.get('#country-field-dropdown').click()
    .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
    .scrollTo("bottom", { duration: 100 }).contains("Canada")
  }
  submitButton(){
    cy.get("#forgotpage-button").click()
  }
  alert(){

  }
  forgotInvaliDetails(){
    cy.get("#forgotpage-email-input").type(generateValidRandomEmail())
    cy.get('#country-field-dropdown').click()
    .get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper"]')
    .scrollTo("bottom", { duration: 100 }).contains("Canada")
  }
  popup(){
    cy.get('[class="swal-modal"]').get('[class="swal-button-container"]').contains('OK').click()
  }
  goToLoginPageButton(){
    cy.get('[class="cursor-pointer text-[16px] text-[blue]"]').contains('Go to Login Page').should('contain','Go to Login Page').click()
  }
}
export default ForgotPassword