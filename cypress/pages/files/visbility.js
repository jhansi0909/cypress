// class visibilityApi {
//   Visibility() {
//     var page;

//     cy.get(".card");
//     cy.request("GET","http://65.1.7.25:4000/category-master/?$paginate=false").then((response) => {
//       console.log(response, "response isssssssssssss");
//       page = response.body;
//       console.log(page, "page isss");
//       const api = page.filter((element) => element.category_name == "visibility");
//       console.log(api, "value of x");

//       const apiArray = api.map((value) => value.category_value);
//       console.log(apiArray, "array values are");

//       cy.get("#parent-drop-down-visibility-select").get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')
//         .then((element) => {
//           const innerTextArray = [...element].map((ele) => ele.innerText);

//           console.log(innerTextArray, "inner text isssss");
//           // in equalValues, store values presented in both arrays
//           const equalValues = apiArray.filter((value) =>
//             innerTextArray.includes(value)
//           );
//           console.log(equalValues, "equal values areeeee");

//           // Now, perform actions and assertions using cy.then()
//            cy.get("#parent-drop-down-visibility-select").click();     
          //  equalValues.forEach((value) => {
          //   cy.contains(value).click();
          //  if (value == "Privado") {
          //    cy.get('[class="mr-3"]').eq(4).click();
          //  }
          //  });
     
//         });
//     });
//   }
// }

// export default visibilityApi;

import visibilityApi from "@pages/api/visibility";

class apiVisibility {

  constructor() {
    this.equalValues = null; // Initialize equalValues as an instance variable
  }


  data(){
    // Store the result of apiRequest in this.equalValues
    return visibilityApi().then((response) => {
       const api = response.filter((element) => element.category_name == "visibility");
      console.log(api, "value of x");

      const apiArray = api.map((value) => value.category_value);
      console.log(apiArray, "array values are");
      console.log(response, "the new response isssssss");
      cy.get("#parent-drop-down-visibility-select")
      .get('[class="break-words"]')
        .then((element) => {
          const innerTextArray = [...element].map((ele) => ele.innerText);
          console.log(innerTextArray);
          console.log(innerTextArray, "inner text isssss");
          // Store values presented in both arrays in this.equalValues
          this.equalValues = apiArray.filter((value) =>
            innerTextArray.includes(value)
          );
          console.log(this.equalValues, "equal values areeeeeeeeeee");
          return this.equalValues;
        });
    });
  }

visibilityInput() {
    // Now you can access this.equalValues in the organizerInput method
    cy.get("#parent-drop-down-visibility-select").click();
  }
  selectVisibilityOption(){
    this.equalValues.filter((value) => {
      cy.contains(value).click();
      if (value == "Privado") {
        cy.get('[class="w-7 cursor-pointer text-success"]').eq(4).click();
      }
    });
  }
}

export default apiVisibility
