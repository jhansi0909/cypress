import teacherApi from "@pages/api/teacher";

class apiTeacher {

  constructor() {
    this.equalValues = null; // Initialize equalValues as an instance variable
  }


  data(){
    // Store the result of apiRequest in this.equalValues
    return teacherApi().then((response) => {
      const data=response.data
      const api = data.filter((element) => element.activity_type.category_name == "event_type");
      console.log(data,"teacher data isss")
      console.log(api, "value of x");

      const apiArray = api.map((value) => value.category_value);
      console.log(apiArray, "array values are");



      // cy.get("#parent-drop-down-visibility-select")
      //   .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')
      //   .then((element) => {
      //     const innerTextArray = [...element].map((ele) => ele.innerText);
      //     console.log(innerTextArray);
      //     console.log(innerTextArray, "inner text isssss");
      //     // Store values presented in both arrays in this.equalValues
      //     this.equalValues = apiArray.filter((value) =>
      //       innerTextArray.includes(value)
      //     );
      //     console.log(this.equalValues, "equal values areeeeeeeeeee");
      //     return this.equalValues;
      //   });
    });
  }

}
export default apiTeacher