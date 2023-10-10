const stateApi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/state?%24limit=50&region_id=2&country_id=7").then((response) => {
      console.log(response, "response isssssssssssss");
   const state = response.body.data
    console.log(state, "country data isss");
    return state
})
}
export default stateApi