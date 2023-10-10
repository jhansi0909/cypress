const countryApi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/country?%24limit=25&region_id=2").then((response) => {
      console.log(response, "response isssssssssssss");
   const country = response.body.data
    console.log(country, "country data isss");
    return country
})
}
export default countryApi