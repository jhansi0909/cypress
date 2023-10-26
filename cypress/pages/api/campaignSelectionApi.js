const campaignSelectionAPi=()=>{

  // const id=263

    return cy.request("GET","http://65.1.7.25:3000/mk-campaign?id=263").then((response) => {
      console.log(response, "response isssssssssssss");
   const campaignSelection = response.body.data
    console.log(campaignSelection, "country data isss");
    return campaignSelection
})
}
export default campaignSelectionAPi