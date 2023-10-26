const { When } = require("@badeball/cypress-cucumber-preprocessor");
import campaigns from "@pages/files/campaigndata";
const Campaign=new campaigns
import selectionCampaign from "@pages/files/campaignSelectionData";
const Select=new selectionCampaign

const dropdownSelector = '#scroll-master_campaign_allcampaigns';
const option ='[class="text-sm break-words"]'
const searchId='#still-open-drop-down-master_campaign_allcampaigns-header'
const campaignId='[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]'

When('user check the selected campaign api data',()=>{
  Select.selectedCampaignApiData()
  cy.wait(3000)
})

When('user want to search the campaigns by using the search box',()=>{
cy.get(searchId).type("automation")
})

When('user select one {string} in the below dropdown in step3',(campaignName)=>{
cy.contains(campaignName).click()
})
When('user click on the {string} button in campaign',(viewmorebutton)=>{
    cy.wait(5000)
    cy.wait(5000)
    cy.get(campaignId).scrollTo('bottom',{duration:2000}).contains(viewmorebutton).click()
})
// When('user select one {string} in the below dropdown in step3', (campaignName) => {
//     const dropdownSelector = '#scroll-master_campaign_allcampaigns';
  
//     // Define a flag to indicate whether the desired option has been found
//     let optionFound = false;
  
//     cy.get(dropdownSelector).scrollTo('bottom', { duration: 2000 });
  
//     // Use a recursive function to search for the option while scrolling
//     const searchOptionAndScroll = () => {   
//       cy.get(dropdownSelector)
//         .find(option)
//         .then((options) => {
//           for (let i = 0; i < options.length; i++) {
//             cy.get(dropdownSelector).scrollTo('bottom', { duration: 2000 });
//             if (options[i].textContent === campaignName) {
//               // Click the option when found
//               cy.get(dropdownSelector).contains(campaignName).click();
//               optionFound = true;
//               return; // Exit the loop
//             }
//           }
//         });
  
//       if (!optionFound) {
//         // Scroll down and then search again
//         cy.get(dropdownSelector).scrollTo('bottom', { duration: 2000 });
//         searchOptionAndScroll(); // Recursive call
//       }
//     };
  
//     // Start searching for the option and scrolling
//     searchOptionAndScroll();
//   });