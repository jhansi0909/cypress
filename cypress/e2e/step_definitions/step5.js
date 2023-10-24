const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import DateTime from "@pages/files/step3";
const dateAndTime = new DateTime
import apiGastos from "@pages/files/gastosData";
const gastos=new apiGastos

const { default: generateRandomName } = require("@pages/regularExpression/centernamesgenerate");

let actionPerformed = false;

let datefilledactionperfomed=false

When("user type the {string} input field", (name) => {
  if (!actionPerformed) {
    cy.contains(name).parent('div').parent('div').find('[type="text"]').should('be.visible')
      .each(($inputField) => {
        cy.wrap($inputField).type("10").should("have.css", "border-color", "rgb(229, 231, 235)");
      });

    // Set the flag to true to indicate that the action has been performed
    actionPerformed = true;
  }
});
When('the user verifies the {string} text',(text1)=>{
    cy.contains(text1).should('be.visible',text1)
});
When('the user clicks on the {string}',(text)=>{
  cy.contains(text).click()
});
When('user can add the category names.',()=>{
    cy.get('[class="flex-[0.7] rounded-[10px] "]').type("bottle")
})
When('user click on the {string} button in gastos model',(buttonName)=>{
cy.get('[class="flex-[0.3] bg-[#D7D7D7] text-[#7677F4] rounded-r-[10px] "]').contains(buttonName).click()
// cy.wait(2000)
})
When('user search the recently added category data by using the search input fields and user select the above search category data',()=>{
    cy.get('[class="placeholder:text-gray-700 p-2 outline-none w-full"]').type("bottle")
    .get('#scroll-expense_category_id').scrollTo('bottom',{duration:2000})
    .wait(3000)
    .scrollTo('bottom',{duration:2000})
    .scrollTo('bottom',{duration:2000})
    .contains("bottle").wait(2000)
    .click().should("have.css", "border-color", "rgb(229, 231, 235)")
})

When('user add date manually previous date {string} {string} {string}', () => {
  //     cy.get('[class="relative"]').parent('div').parent('div').then(body => {
  // cy.get(body).find('[placeholder="dd"]').eq(0).type(date);
  // cy.get(body).find('[placeholder="mm"]').eq(0).type(month);
  // cy.get(body).find('[placeholder="yyyy"]').eq(0).type("2023");
  //     })
  const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(today.getDate() - 7);

// Split the future date into day, month, and year
const day = futureDate.getDate().toString();
const month = (futureDate.getMonth() + 1).toString(); // Months are 0-based, so add 1
const year = futureDate.getFullYear().toString();
console.log(year,"yearisss")
// Assuming each input field has a unique identifier, use appropriate selectors
cy.get('[placeholder="dd"]').type(day); 
cy.get('[placeholder="mm"]').type(month); 
cy.get('[placeholder="yyyy"]').type(year);
});

When('It does not accept Previous date it change the color to {string}',()=>{
       cy.get(".card")
         .get('[class="flex items-center border rounded-[10px]  pl-[16px] pr-[11px] w-[173px] h-[45px]  border-error"]')
         .should("have.css", "border-color", "rgb(255, 88, 88)");
    // cy.get('[class="relative"]').should("have.css", "border-color", "rgb(255, 0, 0)")
})
When('user clear the previously enter date',()=>{
      cy.get('[class="relative"]').parent('div').parent('div').then(body => {
  cy.get(body).get('[class="w-7 cursor-pointer text-error "]').click()
      })
})

Then('user add date manually future date +{string} from the current date', (days,selectDate) => {
  if (!datefilledactionperfomed) {
  const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + 7);

// Split the future date into day, month, and year
const day = futureDate.getDate().toString();
const month = (futureDate.getMonth() + 1).toString(); // Months are 0-based, so add 1
const year = futureDate.getFullYear().toString();

// Assuming each input field has a unique identifier, use appropriate selectors
cy.get('[placeholder="dd"]').type(day); 
cy.get('[placeholder="mm"]').type(month); 
cy.get('[placeholder="yyyy"]').type(year);
  }
  datefilledactionperfomed=true

})
When('It accept {string} it change the color to {string} and get crossIcon',()=>{
    cy.get(".card")
         .get('[class="flex items-center border rounded-[10px]  pl-[16px] pr-[11px] w-[173px] h-[45px]  border-success"]')
.should('have.css','border-color','rgb(68, 183, 65)')
.get('[class="ml-auto"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
})
When('user can add the amount in {string} input field',()=>{
  var randomNumber = Math.floor(Math.random() * 4000);
  console.log(randomNumber);
    cy.get(".card").get('[name="projected_expense_amount"]').type(randomNumber);
});
When('It accept amount it change the color to {string} and get crossIcon',()=>{
  cy.get('.card').get('[name="projected_expense_amount"]').should('have.css','border-color','rgb(229, 231, 235)')
  .get('[class="w-7 cursor-pointer"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
})
When('the user clicks on the check box {string}',(id)=>{
cy.get(id).click()
});
When('It accept name it change the color to {string} and get crossIcon',()=>{
  cy.get('.card').get('#parent-drop-down-transferred_to_user_id-select').should('have.css','border-color','rgb(68, 183, 65)')
  .get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
})
When('user want to type the description',()=>{
    cy.get('[placeholder="Descripcion (campo abierto)"]').type("helooooooooooo")
})
When('api getting data Gastos', () => {
  gastos.data();
});
When('user get all categories data',()=>{
 gastos.getAllCategoryValues()
})
When('user caluculate the total',()=>{
    gastos.multiplyBothArrays()
})
When('user check the apidata and frontend data',()=>{
    gastos.checkTheEstimationAmount()
})
When('user want caluculate the balance',()=>{
    gastos.balanceAmount()
})

When('user check the amount {string}. it is less than <4000',()=>{
    gastos.checkGastosEstimadosAmount()
})

When('the {string} enable blue color',(button)=>{
  cy.contains(button).should('have.css','border-color','rgb(229, 231, 235)')
})