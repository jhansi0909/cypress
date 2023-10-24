import stateApi from "@pages/api/state";
class state {
  constructor() {
    this.stateValues = null;
    this.api = null;
  }

  stateData() {
    return stateApi().then((response) => {
      this.api = response.map((element) => element.name);
      console.log(this.api, "value of x");

      // Scroll to the bottom of the page

      // After scrolling, select the elements you want to interact with
      cy.get("#parent-drop-down-state-select").click();
      cy.wait(2000);
      cy.get("#scroll-state")

        .scrollTo("bottom", { duration: 5000 })
        .scrollTo("bottom", { duration: 2000 })
        .scrollTo("bottom", { duration: 2000 })
        .get('[class="break-words"]')

        .then((element) => {
          const innerTextArray = [...element].map((ele) => ele.innerText);
          console.log(innerTextArray);
          console.log(innerTextArray, "inner text state values");

          // Compare elements' text with the API data
          this.stateValues = this.api.filter((value) =>
            innerTextArray.includes(value)
          );
          console.log(this.stateValues, "state equal values areeeeeeeeeee");
          expect(this.stateValues).to.deep.equal(this.api);
          return this.stateValues;
        });
    });
  }

  verifyStateInput() {
    cy.get("#parent-drop-down-state-select").click();
    cy.get("#parent-drop-down-state-select").click();
  }
  verifyStateDropdoown() {
    cy.get("#parent-drop-down-state-select").click();
    cy.get("#parent-drop-down-state-select").click();
    cy.get("#scroll-state").should("be.visible");
  }
  verifyTheStateDropdoownValues() {
    cy.get("#scroll-state");
    expect(this.stateValues).to.deep.equal(this.api);
  }

  selectState() {
    const state = this.stateValues.find((state) => state == "Mahaica-Berbice");
    console.log(state, "selected state");
    cy.contains(state).click();
  }
}
export default state;
