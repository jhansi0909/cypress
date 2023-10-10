import countryApi from "@pages/api/country";
class country{
    constructor(){
        this.countryValues=null
        this.api=null
    }

    countryData() {
  return countryApi().then((response) => {
    this.api = response.map((element) => element.name);
    console.log(this.api, "value of x");

    // Scroll to the bottom of the page
   

    // After scrolling, select the elements you want to interact with
    cy.get('#parent-drop-down-country-select').click()
    cy.get('#scroll-country').scrollTo('bottom', { duration: 2000 })
    .scrollTo('bottom', { duration: 2000 })
    .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')

      .then((element) => {
       const innerTextArray = [...element].map((ele) =>ele.innerText);
        console.log(innerTextArray);
        console.log(innerTextArray, "inner text country values");

        // Compare elements' text with the API data
        this.countryValues = this.api.filter((value) => innerTextArray.includes(value))
        console.log(this.countryValues, "country equal values areeeeeeeeeee");
        // cy.get("#parent-drop-down-country-select").click();
        expect(this.countryValues).to.deep.equal(this.api); 
        return this.countryValues;
      })
  });
}

    verifyCountryInput(){
        cy.get('#parent-drop-down-country-select').should('be.visible')
        // cy.get('#scroll-country').scrollTo('bottom', { duration: 2000 })
    }
    verifyCountryDropdoown(){
        cy.get("#parent-drop-down-country-select").click();
        cy.get("#parent-drop-down-country-select").click();
        cy.get('#scroll-country').should('be.visible')
    }
    verifyTheCountryDropdoownValues(){
        cy.get("#scroll-country");
        expect(this.countryValues).to.deep.equal(this.api); 
    }


    selectCountry(){     

    // cy.get('[class="placeholder:text-gray-700 p-2 outline-none w-full text-base"]').type("Guyana")
    // .contains("Guyana").click()

      const country = this.countryValues.find((country) => country == "Guyana");
      cy.get('[class="placeholder:text-gray-700 p-2 outline-none w-full text-base"]').eq(0).type("Guyana")
      console.log(country,"selected country")
      cy.contains(country).click()
    }




}
export default country