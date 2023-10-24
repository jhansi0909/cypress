// class formatAPi {
//   Format() {
//     var page;

//     cy.get(".card");
//     cy.request("GET","http://65.1.7.25:4000/category-master/?$paginate=false").then((response) => {
//       console.log(response, "response isssssssssssss");
//       page = response.body;
//       console.log(page, "page isss");
//       const api = page.filter(
//         (element) => element.category_name == "format"
//       );
//       console.log(api, "value of x");

//       const apiArray = api.map((value) => value.category_value);
//       console.log(apiArray, "array values are");
//   //  cy.get("#parent-drop-down-format-select").click();
//       cy.get("#parent-drop-down-format-select")
//         .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')
//         .then((element) => {
//           const innerTextArray = [...element].map((ele) => ele.innerText);

//           console.log(innerTextArray, "inner text isssss");
//           // in equalValues, store values presented in both arrays
//           const equalValues = apiArray.filter((value) =>
//             innerTextArray.includes(value)
//           );
//           console.log(equalValues, "equal values areeeee");
       
//          cy.get("#parent-drop-down-format-select").click();
//          equalValues.forEach((value) => {
//            cy.contains(value).click()
//               if (value == "En Linea") {
//                 cy.get('[placeholder="Link Zoom"]').type("https://zoom.us/abcddegyghj");
//               }
//           else{
//             cy.get('[class="mr-3"]').eq(3).click();
//           }
//          });
//         });
//     });
//   }
// }

// export default formatAPi;

import formatApi from "@pages/api/format";

class apiFormat {

  constructor() {
  this.formatValues = null; // Initialize equalValues as an instance variable
  }


  data(){
    // Store the result of apiRequest in this.equalValues
    return formatApi().then((response) => {
       const api = response.filter((element) => element.category_name == "format");
      console.log(api, "value of x");

      const apiArray = api.map((value) => value.category_value);
      console.log(apiArray, "array values are");
      console.log(response, "the new response isssssss");
      cy.get("#parent-drop-down-format-select")
      .get('[class="break-words"]')
        .then((element) => {
          const innerTextArray = [...element].map((ele) => ele.innerText);
          console.log(innerTextArray);
          console.log(innerTextArray, "inner text isssss");
          // Store values presented in both arrays in this.equalValues
          this.formatValues = apiArray.filter((value) =>
            innerTextArray.includes(value)
          );
          console.log(this.formatValues, "equal values areeeeeeeeeee");
          return this.formatValues;
        });
    });
  }

  formatInput() {
    // Now you can access this.equalValues in the organizerInput method
    cy.get("#parent-drop-down-format-select").click();
  }
  selectFormatOption(){
      this.formatValues.forEach((value) => {
      cy.contains(value).click();
      if (value == "En Linea") {
        cy.get('[placeholder="Link Zoom"]').type("https://zoom.us/abcddegyghj");
      }
      else{
        cy.get('[class="w-7 cursor-pointer text-success"]').eq(3).click();
      }
    });
  }
}

export default apiFormat