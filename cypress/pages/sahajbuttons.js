class sahajButtons{
next(){
  cy.contains('Next').click()
}
Previous(){

}
save(){
cy.get('. bg-gray-300 text-center rounded-[5px] mb-3').contains('Save').click()
}
submit(){

}
}
export default sahajButtons