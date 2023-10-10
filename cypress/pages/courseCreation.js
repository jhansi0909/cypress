import cowData from "../fixtures/cow.json";
class staticPage {
  small ='[class="w-[195px] h-[155px] border-[1px] border-[#D7D7D7] rounded-[10px] flex  flex-col justify-center items-center"]';
  smallCards ='[class="w-[195px] border-[1px] border-[#D7D7D7] rounded-[10px] flex flex-col justify-center items-center"]';
  images = '[class="flex justify-center pt-[14px]"]';
  newCourse() {
    cy.contains("NUEVO CURSO").click();
    // .should('contain.text','NUEVO CURSO')
    cy.get('[class=" flex items-center justify-center px-5 py-3 bg-[#7677F4] text-[#FFFFFF] rounded-[10px]  cursor-pointer w-[185px] h-[45px] "]').should("be.visible");
  }
  //    stastic page
  staticPage() {
    // cy.get('[class="card relative bg-[#FFFFFF] mx-auto shadow-lg rounded-[10px] py-5  my-16  max-w-fit max-h-fit p-10 "]').should('be.visible').invoke('width').should('eq','551')
    cy.get(".card").should("be.visible");
    // .invoke('height').should('eq','810')
  }
  headingOfStaticPage() {
    //verify heading
    cy.get(".card").contains(cowData.headings[0]).should("be.visible");
  }
  textOfStaticPage() {
    //verify text
    cy.get(".card")
      .contains(cowData.text[0])
      .should("contain", cowData.text[0]);
  }
  firstBox() {
    // // first box
    // cy.get(this.smallCards).should('be.visible')
    //verify image
    cy.get('[class="pt-[14px]"]')
      .should("be.visible")
      .invoke("width")
      .should("eq", 40);
    // // verify text
    // cy.get('.card').contains('Una landing page exclusiva para su promoción.')
  }
  secondBox() {
    // cy.get('[class="w-[195px] border-[1px] border-[#D7D7D7] rounded-[10px] flex  flex-col justify-center items-center"]').should('be.visible')
    cy.get('[class=" pt-[14px]"]')
      .should("be.visible")
      .invoke("width")
      .should("eq", 40);
    // cy.get('.card').contains('El curso se publicará en la página web.').should('contain','El curso se publicará en la página web.')
  }
  secondPartText() {
    cy.get(".card").contains(cowData.secondPart[0]);
  }
  thirdBox() {
    // cy.get(this.small).eq(0).should('be.visible')
    cy.get(this.images)
      .eq(0)
      .should("be.visible")
      .should("have.css", "border-color", "rgb(229, 231, 235)");
    // cy.get('.card').contains('Una proyección de gastos y apróximado de participantes.').should('contain','Una proyección de gastos y apróximado de participantes')
  }
  fourthBox() {
    // cy.get(this.small).eq(1).should('be.visible')
    cy.get(this.images).eq(1).should("be.visible").invoke("width").should("eq", 40);
    // cy.get('.card').contains('Aprobación de las áreas o equipos internos del país.').should('contain',"Aprobación de las áreas o equipos internos del país.")
  }
  importantNoteBox() {
    // color in note box
    cy.get(".card")
      .should("have.css", "border-color", "rgb(229, 231, 235)")
      // cy.get('[class="w-[411px] p-3 pl-5 h-auto m-auto border-[1px] border-[#FFC658] rounded-[10px] bg-[#FFC65812]  "]').should('have.css','border-color','rgb(255, 198, 88)')
      .should("have.css", "background-color", "rgb(255, 255, 255)");
    // text
    cy.get(".card").contains("Si tu curso lo va a organizar otra persona que no seas tu, este deberá ser creado por esa persona.")
      .should("contain","Si tu curso lo va a organizar otra persona que no seas tu, este deberá ser creado por esa persona.");
  }
  startNow(step) {
    cy.get('[type="submit"]').click(step);
    // cy.get('button[class="px-4 h-[45px] undefined primary-btn-extend w-[411px]   "]').click();
  }
  crossIcon(n) {
    cy.get('[class="mr-3"]')
      .click(n)
      // text present or not
      .get('[class="flex flex-col items-center w-[350px]"]')
      .should("be.visible")
      .contains("Estas seguro que quieries cerrar esta ventana?")
      // cancel button
      .get('[class="flex flex-row gap-4 mt-[20px] "]')
      .get('[class="px-4 h-[45px] undefined white-btn w-[143.18px] border-[1px] !h-[45px]  "]')
      .contains("CANCELAR")
      .should("be.visible")
      .click();
    // clear buton
    // cy.get('button[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]').click()
    // .get('[class="flex flex-row gap-4 mt-[20px] "]').get('[class="px-4 h-[45px] undefined primary-btn w-[143.18px]  !h-[45px]  "]').contains('CERRAR').should('be.visible').click()
  }

  input() {
    if (cy.get(".card")) {
      console.log("helooooooooooo");
      const id = [
        "#parent-drop-down-organizer_user_id-select",
        "#parent-drop-down-teachers-select",
        "#parent-drop-down-course_type-select",
        "#parent-drop-down-format-select",
        "#parent-drop-down-visibility-select",
      ];
      const dropdownId = [
        "#still-open-drop-down-organizer_user_id",
        "#still-open-drop-down-teachers",
        "#still-open-drop-down-course_type",
        "#still-open-drop-down-format",
        "#still-open-drop-down-visibility"
      ];
      console.log(dropdownId[0]).click()
      let n=100
      for (let i = 0; i < 5; i++) {
        cy.get(id[i]).click()
        // const dropdownId =".p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]";
        for(let j=0;j<5;j++){
            cy.contains(dropdownId[j])
            for(let k=0;k<n;k++){
                cy.eq(k).click()
            }
        }
    

        // for(let j=0;j<5;j++){
        //     cy.contains(dropdownId[j])
        // }
      }
      //  cy.get('#parent-drop-down-organizer_user_id-select').click()
      // id.forEach(element => {
      //     cy.wrap(element).click();
      // });
    }
  }

  Heading() {
    cy.get('[class="flex items-center justify-center"]')
      .contains("NUEVO CURSO")
      .should("contain", "NUEVO CURSO");
  }
}
export default staticPage;
