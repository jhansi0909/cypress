const campaignAPi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/mk-campaign?%24limit=100&%24skip=50&is_master_campaign=false").then((response) => {
      console.log(response, "response isssssssssssss");
   const campaign = response.body.data
    console.log(campaign, "country data isss");
    return campaign
})
}
export default campaignAPi