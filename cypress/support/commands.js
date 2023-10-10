// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { apiData } from "@pages/api/organizer1";

// context("GET /bankTransfer", function () {
//     it("gets a list of bank transfers for user", function () {
//       const { id: userId } = ctx.authenticatedUser!;
//       cy.request("GET", `${apiBankTransfer}`).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.transfers[0].userId).to.eq(userId);
//       });
//     });
//   });

//   Given(/^I access api request end point to get users$/, () => {
// const url = "http://65.1.7.25:4000/docs/#/category-master/get_category_master";
// cy.request(url).then((data)=>{
//     console.log(data,"courses data issssss")

// })
// });
// function apidata(){

//    cy.request("GET", "http://65.1.7.25:4000/category-master/?$paginate=false").then((response) => {
//     let  response=response.body
//       console.log(response,"rsponse iss");
//       return response
//     });

// }
// export default apidata
