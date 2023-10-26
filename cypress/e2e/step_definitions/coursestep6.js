
const { When} = require("@badeball/cypress-cucumber-preprocessor");

When('the user clicks on the edit icon',()=>{
    cy.get(".card").get('[class="cursor-pointer"]').each(($el, index) => {

        if (index==3) {
            cy.wrap($el).click()
        }
})
})
When('user edit the {string} number',()=>{
    cy.get('[class="h-full  w-full focus:outline-none  placeholder:text-default "]').invoke('val')
    .should('have.value',value)
.get('[class="w-7 cursor-pointer"]').click()
})
When('the user clicks on the crossicon',()=>{
    cy.get('.card').get('[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]').click()
})