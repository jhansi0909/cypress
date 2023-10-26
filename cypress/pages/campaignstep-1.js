class campaignStep1{
    searchInput='input[type="text"]'
    dropdownContainer='#still-open-drop-down-client_user-footer'
    dropdownElement='#scroll-client_user .cursor-pointer'
    instructorDropdown='#scroll-client_user'
    redColor='.card .border-error'
    greenColor='.card .border-success'
    crossIcon='[class="w-7 cursor-pointer"]'


    search(){
        cy.get(this.searchInput).eq(1).type("ins")
    }
    selectOneDashboard(){
    cy.get(this.dropdownContainer)
    .get(this.dropdownElement).each(($el,index)=>{
        if(index==0){
            $el.click()
        }
    })
    }
    selectOneInstructor(){
     cy.get(this.instructorDropdown).get(this.dropdownElement).each(($el,index)=>{
        if(index==0){
            $el.click()
        }
     })
    }
    redColorInput(){
     cy.get(this.redColor).should('have.css','border-color','rgb(255, 88, 88)')
    }
    greenColorInput(){
     cy.get(this.greenColor).should('have.css','border-color','rgb(68, 183, 65)')
    }
    CrossIcon(){
        cy.get(this.crossIcon).should('have.css','border-color','rgb(229, 231, 235)')
        
    }


}
export default campaignStep1