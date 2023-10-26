class campaign {
  toggle='.card .select-none'
  ImportantNote='.card .mx-auto'

    firstBox() {
        cy.get('[class="pt-[14px]"]')
          .should("be.visible")
      }
      secondBox() {
        cy.get('[class=" pt-[14px]"]')
          .should("be.visible")       
      }
      thirdBox() {
        cy.get('[class="flex  pt-[14px]"]')
        .should("be.visible")
      }
      fourthBox() {
        cy.get('[class="flex pt-[14px]"]').should("be.visible")
      }
      toggleButton(){
      cy.get(this.toggle).click()
      }
      importantNoteBox(){
        cy.get(this.ImportantNote).should("have.css", "border-color", "rgb(255, 198, 88)")
        .should("have.css", "background-color", "rgba(255, 198, 88, 0.07)");
      }
}
export default campaign