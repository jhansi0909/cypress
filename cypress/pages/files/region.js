import regionApi from "@pages/api/Region";

class region {
  constructor() {
    this.regionValues = null;
    this.api=null
  }
  regionData() {
    return regionApi().then((response) => {
     this.api = response.map((element) => element.name);
      console.log(this.api.length, "region names areeeee");

      cy.get("#parent-drop-down-region-select")
      .get('[class="break-words"]')
        .then((element) => {
          const innerTextArray = [...element].map((ele) => ele.innerText);
          console.log(innerTextArray);
          console.log(innerTextArray, "second step inner text isssss");
          //    expect(element).to.equal(api)
          // Store values presented in both arrays in this.equalValues
          this.regionValues = this.api.filter((value) =>
            innerTextArray.includes(value)
          );

          //   expect(this.regionValues).to.deep.equal(api);
          console.log(this.regionValues, "region equal values areeeeeeeeeee");

          expect(this.regionValues).to.deep.equal(this.api);
          return this.regionValues;
        });
    });
  }
  verifyRegionInput() {
    cy.get("#parent-drop-down-region-select").click();
  }
  verifyRegionDropdoown() {
    cy.get("#parent-drop-down-region-select").click();
    cy.get("#parent-drop-down-region-select").click();
    cy.get("#still-open-drop-down-region").should("be.visible");
  }
  verifyTheRegionDropdoownValues() {
    cy.get("#still-open-drop-down-region");
  
    expect(this.regionValues).to.deep.equal(this.api);
  }

  selectRegion() {
    const region = this.regionValues.find((region) => region == "Norteamérica");
    console.log(region, "selected region is");
    cy.contains(region).click();

    // this.regionValues.map((region)=>{
    //   cy.contains(region).click();
    //      if(region=="Sudamérica" || region=="Norteamérica"){
    //       cy.get('[class="mr-3"]').eq(0).click()
    //      }
    // })
  }
}
export default region