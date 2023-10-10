const { When } = require("@badeball/cypress-cucumber-preprocessor");
const { default: generateRandomGmail } = require("@pages/regularExpression/gmailgenerate");
const { default: namegenerate } = require("@pages/regularExpression/namegenerate");
import randomPhoneNumber from "@pages/regularExpression/phonenumgenerate";
// const { default: randomPhoneNumber } = require("@pages/regularExpression/phonenumgenerate");
// const { default: generateRandomName, default: namegenerate } = require("@pages/regularExpression/namegenerate");

When('the user verifies the presence of the {string} input field',(inputname)=>{
    cy.get('.card').find('[placeholder="' + inputname + '"]').should('be.visible')
})
When('the user enter the name in {string} input field',(inputname)=>{
    if(inputname=="Nombre"){
    cy.get('.card').find('[placeholder="' + inputname + '"]').type(namegenerate())
    }
    else if(inputname=="Teléfono"){
    cy.get('.card').find('[placeholder="' + inputname + '"]').type(randomPhoneNumber)
    }
    else{
    cy.get('.card').find('[placeholder="' + inputname + '"]').type(generateRandomGmail())
    }

})
When('the {string} input field accept only {string}',(inputname)=>{
    if (inputname == "Nombre"){
        cy.get(".card").find('[placeholder="' + inputname + '"]').invoke("val")
        .should((value) => {
          expect(Number.isNaN(+value), "input should accept only string").to.eq(true);
        });
    }
    else if (inputname == "Teléfono"){
        cy.get(".card").find('[placeholder="' + inputname + '"]').invoke("val")
        .should((value) => {
          expect(Number.isNaN(+value), "input should accept only string").to.eq(false);
        });
    }
})
When('user can verify the {string} input',(placeholdername)=>{
cy.get('.card').contains(placeholdername).should('be.visible')
});
When('user click on {string} input field',(placeholdername)=>{
    cy.get('.card').contains(placeholdername).click()
})
When('the user verifies the presence of {string} open dropdown',(inputname)=>{
    if(inputname=="Seleccionar Gira"){
    cy.get('.card').get('#still-open-drop-down-is_tour_associated').should('be.visible')
    }
    if(inputname=="Seleccionar"){
     cy.get('.card').get('#still-open-drop-down-workshop_ids-header').should('be.visible')
    }
});

When('user want to select {string} option',(name)=>{
    cy.get('[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]').scrollTo('bottom',{duration:2000})
    cy.get('.card').contains(name).click()
});