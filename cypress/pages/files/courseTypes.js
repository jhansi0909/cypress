// import courseTypesApi from "@pages/api/courseTypes";

// class apiCourses {

//   constructor() {
//     this.equalValues = null; // Initialize equalValues as an instance variable
//   }

//   data(){
//     // Store the result of apiRequest in this.equalValues
//     return courseTypesApi().then((response) => {
//        const api = response.filter((element) => element.category_name == "course_type");
//       console.log(api, "value of teacher ");

//       const apiArray = api.map((value) => value.category_value);
//       console.log(apiArray, "course values are");
//       console.log(response, "the new response isssssss")
//       cy.get("#parent-drop-down-course_type-select")
//         .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')
//         .then((element) => {
//           const innerTextArray = [...element].map((ele) => ele.innerText);
//           console.log(innerTextArray);
//           console.log(innerTextArray, "inner text isssss");
//           // Store values presented in both arrays in this.equalValues
//           this.equalValues = apiArray.filter((value) =>innerTextArray.includes(value));
//           console.log(this.equalValues, "equal values areeeeeeeeeee");
//           return this.equalValues;
//         });
//     }); 
//   }
// }
// export default apiCourses