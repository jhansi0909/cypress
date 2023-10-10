const cityApi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/city?%24limit=100&region_id=2&state_id=165&country_id=7").then((response) => {
      console.log(response, "response isssssssssssss");
   const city = response.body.data
    console.log(city, "country data isss");
    return city
})
}
export default cityApi