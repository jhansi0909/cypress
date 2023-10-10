// import dates from "../fixtures/config.json";
// import status from "../fixtures/config.json";
// import months from "../fixtures/config.json";
// const click=[1,2,6]
// const unclick=[7,3]
// const columnSelected=[0,4,6]
import cowData from '../fixtures/cow.json'
// const Data=new cowdata

class workshophomepage {
  navigate(){
    cy.fixture('cow.json').then((data)=>{
      cy.visit(data.cowUrl)
    })
  }
  
// click on instructor in the dashboard
  Dashboard() {
    cy.get('div[class="cursor-pointer h-[170px] w-[300px] bg-white rounded-lg mb-10 mr-12 shadow-md"]')
    .get('[class="px-5 py-5 font-light text-[22px] font-os text-gray-700"]').eq(0)
    .contains(cowData.Dashboards[0]).click({force: true}).wait(4000)
  }
  activites() {
    // cy.get('[class="accordion-item "]')
    cy.contains("Actividades").click();
    // cy.get('[#acc]').click()
  }
  courseClick() {
    // cy.wait(2000)
    // cy.contains(cowData.activites[0])
    cy.contains("Cursos").click(); 
  }
  workshopClick() {
    // cy.get("#collapse0").eq(0).click();
    cy.contains('Talleres').click()
  }
  closeIcon(step){
    cy.get('.card').get('.card >.absolute').click(step)
    // text present or not
    .get('[class="flex flex-col items-center w-[350px]"]').should('be.visible').contains('Estas seguro que quieries cerrar esta ventana?')
    // cancel button
    .get('[class="flex flex-row gap-4 mt-[20px] "]').get('[class="px-4 h-[45px] undefined white-btn w-[143.18px] border-[1px] !h-[45px]  "]').contains('CANCELAR').should('be.visible').click(step)
    // clear buton
    // cy.get('button[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]').click()
    // .get('[class="flex flex-row gap-4 mt-[20px] "]').get('[class="px-4 h-[45px] undefined primary-btn w-[143.18px]  !h-[45px]  "]').contains('CERRAR').should('be.visible').click()
  }
  staticPageThirdBox(){
    //static third box 
    cy.get('[class="w-[195px] h-[155px] border-[1px] border-[#D7D7D7] rounded-[10px] flex  flex-col justify-center items-center"]').eq(0).get('[class="flex justify-center pt-[14px]"]').invoke('width').should('eq',102)
    cy.contains('Una proyección de gastos y apróximado de participantes.').should('contain','Una proyección de gastos y apróximado de participantes.')
    // static fourth box
        cy.get('[class="w-[195px] h-[155px] border-[1px] border-[#D7D7D7] rounded-[10px] flex  flex-col justify-center items-center"]').eq(1).get('[class="flex justify-center pt-[14px]"]').eq(1).invoke('width').should('eq',40)
        cy.contains('Aprobación de las áreas o equipos internos del país.').should('contain','Aprobación de las áreas o equipos internos del país.')
  }
  courseHeading(){

  }
  sideScrollbar() {
    cy.get('div[class="h-full px-4 py-4 overflow-y-auto scrollbar accordion  "]')
      .scrollTo("bottom", { duration: 1000 })
      .scrollTo("top", { duration: 1000 });
  }
  columnSelector() {
    // cy.get('div[d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"]').click({ multiple: true } )
    // cy.get('svg[fill="white"]').click({ multiple: true });
    cy.get('path[d="M28.8289 14H17.1672C14.8707 14 13 15.8707 13 18.1672V26.4976C13 28.794 14.8707 30.6647 17.1672 30.6647H28.8328C31.1293 30.6647 33 28.794 33 26.4976V18.1672C32.9961 15.8707 31.1254 14 28.8289 14ZM17.1672 15.6676H28.8328C30.2115 15.6676 31.3324 16.7885 31.3324 18.1672H14.6676C14.6676 16.7885 15.7885 15.6676 17.1672 15.6676ZM14.6676 26.4976V19.8309H22.1662V28.9971H17.1672C15.7885 28.9971 14.6676 27.8762 14.6676 26.4976ZM28.8289 28.9971H23.8299V19.8309H31.3285V26.4976C31.3285 27.8762 30.2076 28.9971 28.8289 28.9971Z"]').click({ force: true });
  }
  multipleSelection() {
    cy.get('[class=" pt-[20px] pl-[30px] pr-[30px] w-full "]').get('div[class="flex justify-center items-center "]').eq(0).click();
    cy.get('[class=" pt-[20px] pl-[30px] pr-[30px] w-full "]').get('div[class="flex justify-center items-center "]').eq(6).click();
  }
  applicarButton() {
    // cy.get('.w-full transition-all duration-300 bg-indigo-500 border-indigo-500 text-white font-medium border px-8 py-3 text-[14px] rounded-[8px] hover:bg-indigo-600  cursor-no-drop text-[#d7d7d7]" disabled=""').contains('APLICAR').click();
    cy.get("button").contains("APLICAR").click();
  }
  calendar() {
    cy.contains("Fecha").click();
  }
  monthsDropdown() {
    cy.get('[class="flex items-stretch flex-col md:flex-row md:pl-2 "]').get('[class="flex flex-col w-auto h-auto py-2 px-6"]').eq(0)
    .get('path[d="M0 1.76875L1.76813 0L7.5025 5.83687L13.2319 0L15 1.76875L7.5025 9.375L0 1.76875Z"]')
      .eq(0).click({ force: true }).get('div[class="flex flex-col bg-[white] rounded-[15px] shadow-2xl p-5 justify-center items-center"]').contains(cowData.Months[6]).click().wait(1000);

    //    cy.wait(1000)
    cy.get('[class="  h-auto text-[gray] text-[14px] mt-3"]').get('[class="grid grid-cols-7 gap-0 mt-2 gap-y-1"]').eq(0).contains(cowData.calendarDates[5]).click();
    cy.get('[class="  h-auto text-[gray] text-[14px] mt-3"]').get('[class="grid grid-cols-7 gap-0 mt-2 gap-y-1"]').eq(0).contains(cowData.calendarDates[15]).click();
    cy.contains("APLICAR").click();
  }

  clearbutton() {
    cy.get('path[d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"]').click();
  }
  statusFilter() {
    cy.get("#statusFilter-dropDown-open").click();
  }
  selectstatusFilter() {
    cy.get("#statusFilter-dropDown-stillOpen").contains(cowData.Estatus[0]).click();
    // cy.get("#statusFilter-dropDown-stillOpen").contains(status.Estatus[2]).click();
  }
  statusClick() {
    cy.get('[class="flex flex-row items-center rounded-xl undefined bg-[white] my-[16px] px-[20px] py-[14px] min-w-full w-fit gap-[3]"]')
      .eq(7).get('[class="text-[#7677F4] underline decoration-1"]').eq(6).contains("Borrador").click({ force: true });
  }
}
export default workshophomepage;
