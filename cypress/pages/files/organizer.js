
import organizerApi from "@pages/api/organizer";

class apiOrganizor {

  constructor() {
    this.equalValues = null; // Initialize equalValues as an instance variable
    this.api=null
  }


  data(){
    // Store the result of apiRequest in this.equalValues
    return organizerApi().then((response) => {
       const api = response.filter((element) => element.category_name == "event_organizer_dropdown");
      console.log(api, "value of x");

      this.api = api.map((value) => value.category_value);
      console.log(this.api, "array values are");
      console.log(response, "the new response isssssss");
      cy.get("#parent-drop-down-organizer_user_id-select")
      .get('[class="break-words"]')
    // .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')
        .then((element) => {
          const innerTextArray = [...element].map((ele) => ele.innerText);
          console.log(innerTextArray);
          console.log(innerTextArray, "inner text isssss");
          // Store values presented in both arrays in this.equalValues
          this.equalValues = this.api.filter((value) =>
            innerTextArray.includes(value)
          );
          // expect(this.equalValues).to.deep.equal(this.api);
          console.log(this.equalValues, "equal values areeeeeeeeeee");
  
          return this.equalValues;
        });
    });
  }

  organizerInput() {
    // Now you can access this.equalValues in the organizerInput method
    cy.get("#parent-drop-down-organizer_user_id-select").click()
  }
  verifyOrganizerDropdown(){
    // expect(this.equalValues).to.deep.equal(this.api);
    cy.get('#still-open-drop-down-organizer_user_id').should('be.visible')
  }
  selectOneOption(){
    cy.get("#scroll-organizer_user_id").contains("Soy el organizador").click();
  }
  checkPopupModel(){
    cy.get('[class="flex items-center justify-center"]').should('be.visible')
  }
  checkTwoButtons(){
    cy.contains('CANCELAR').should('be.visible')
    cy.contains('CERRAR').should('be.visible')
  }

  // selectAnotherOption(){
  //     this.equalValues.filter((value) => {
  //     cy.contains(value).click().should('have.text',value)
  //     // cy.get('[class="mr-3"]').eq(0).click();
  //     if (value == "Otra persona lo va a organizar") {
  //       cy.get('[class="flex items-center justify-center"]').eq(0).contains('CANCELAR').click()
  //     // cy.get('button[class="px-4 h-[45px] undefined white-btn w-[143.18px] border-[1px] !h-[45px]  "]').contains("CANCELAR").should('be.visible').click();
  //     }
  //      else {
  //       cy.get('[class="mr-3"]').eq(0).click();
  //     }
  //   });
  // }
}

export default apiOrganizor
