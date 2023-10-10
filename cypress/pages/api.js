
class apiOrganizor {
  Organizor() {
    // const id = [
    //   "#parent-drop-down-organizer_user_id-select",
    //   "#parent-drop-down-teachers-select",
    //   "#parent-drop-down-course_type-select",
    //   "#parent-drop-down-format-select",
    //   "#parent-drop-down-visibility-select",
    // ];
    // const dropdownId = [
    //   "#scroll-organizer_user_id",
    //   "#still-open-drop-down-teachers",
    //   "#still-open-drop-down-course_type",
    //   "#still-open-drop-down-format",
    //   "#still-open-drop-down-visibility",
    // ];
    var page;

    cy.get(".card");
    cy.request("GET","http://65.1.7.25:4000/category-master/?$paginate=false").then((response) => {
      console.log(response, "response isssssssssssss");
      page = response.body;
      console.log(page, "page isss");
      const api = page.filter((element) => element.category_name == "event_organizer_dropdown");
      console.log(api, "value of x");

      const apiArray = api.map((value) => value.category_value);
      console.log(apiArray, "array values are");

      cy.get('#parent-drop-down-organizer_user_id-select')
      .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]').then((element) => {
      const innerTextArray = [...element].map((ele) => ele.innerText);

        console.log(innerTextArray, "inner text isssss");
        // in equalValues, store values presented in both arrays
        const equalValues = apiArray.filter((value) =>
        innerTextArray.includes(value)
    );
        console.log(equalValues, "equal values areeeee");

        // Now, perform actions and assertions using cy.then()
        cy.then(() => {
        cy.get("#parent-drop-down-organizer_user_id-select").click();
          equalValues.forEach((value)=> {
            cy.contains(value).click(); 
            if (value == "Otra persona lo va a organizar") {
            cy.get('[class="flex flex-col items-center w-[350px]"]').contains('CANCELAR').click()
                // cy.get('[class="flex flex-col items-center w-[350px]"]').contains('CERRAR').click()
            }
            cy.get('[class="mr-3"]').eq(0).click(); 
            // cy.get('[class="flex items-center pl-2 text-[16px] justify-center"]').eq(0).invoke('val').then((value1)=> {
            // console.log(value1,"value one isssssss")
            // })    
          })
          
        });
      })
    });
  }
}

export default apiOrganizor;
