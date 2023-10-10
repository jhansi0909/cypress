

const regionApi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/region").then((response) => {
      console.log(response, "response isssssssssssss");
   const region = response.body.data;
    console.log(region, "region isss");
    return region
})
}
export default regionApi