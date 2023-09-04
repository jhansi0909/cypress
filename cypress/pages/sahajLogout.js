class LogOut{

    logoutbutton(){
        cy.get('[type="button"]').contains('Logout').click()
        cy.get('#login-form-section')
    }   
}
export default LogOut