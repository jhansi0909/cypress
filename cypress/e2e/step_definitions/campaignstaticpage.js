import { Given,When } from "@badeball/cypress-cucumber-preprocessor";
import workshophomepage from "@pages/workshophomepage";
const campaigncreation = new workshophomepage();
import campaign from "@pages/campaignstaticpage";
const Campaign =new campaign()

Given("I navigate to login page", () => {
    campaigncreation.navigate();
  })
  When('user click on {string} in the dashboard',(cam)=>{
cy.get('[class="flex items-center pl-[8px] gap-4"]').contains(cam).click()
  })
When('user can verify the image in {string} box in campaign creation',()=>{
Campaign.firstBox()
Campaign.secondBox()
Campaign.thirdBox()
Campaign.fourthBox()
})

When('user can verify the text {string} in campaign',(text)=>{
    cy.contains(text)
})
When('check the important box',()=>{
    Campaign.importantNoteBox()
})



