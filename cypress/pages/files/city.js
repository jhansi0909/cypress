import cityApi from "@pages/api/city";
class city {
  constructor() {
    this.cityValues = null;
    this.api=null
  }

  cityData() {
    return cityApi().then((response) => {
        this.api = response.map((element) => element.name);
      console.log(this.api, "value of x");

      // Scroll to the bottom of the page

      // After scrolling, select the elements you want to interact with
      cy.get("#parent-drop-down-city-select").click();
      cy.wait(2000);
      cy.get("#scroll-city")
        // .scrollTo("bottom", { duration: 5000 })
        .scrollTo("bottom", { duration: 2000 })
        .scrollTo("bottom", { duration: 2000 })
        .get('[class="break-words"]')

        .then((element) => {
          const innerTextArray = [...element].map((ele) => ele.innerText);
          console.log(innerTextArray);
          console.log(innerTextArray, "inner text city values");

          // Compare elements' text with the API data
          this.cityValues = this.api.filter((value) =>
            innerTextArray.includes(value)
          );
          console.log(this.cityValues, "city equal values areeeeeeeeeee");
          expect(this.cityValues).to.deep.equal(this.api);
          return this.cityValues;
        });
    });
  }

  verifyCityInput() {
    cy.get("#parent-drop-down-city-select").click();
    cy.get("#parent-drop-down-city-select").click();
  }
  verifyCityDropdoown() {
    cy.get("#parent-drop-down-city-select").click();
    cy.get("#parent-drop-down-city-select").click();
    cy.get("#scroll-city").should("be.visible");
  }
  verifyTheCityDropdoownValues() {
    cy.get("#scroll-city");
    expect(this.cityValues).to.deep.equal(this.api);
  }
  selectCity() {
    // cy.get('input[type="text"]').eq(3).type("Woodlands/Bel Air").click()
    const city = this.cityValues.find((city) => city == "Woodlands/Bel Air");
    console.log(city, "selected city");
    cy.contains(city).click();
  }
}
export default city;
