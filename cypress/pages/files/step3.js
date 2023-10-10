import cow from "../../fixtures/cow.json";
class DateTime{

 verifyCalendar(){
    cy.get('#calendar-icon').should('be.visible')
 }
 verifyArrows(){
    cy.get('[class="border border-[#D7D7D7] h-[30px] w-[30px] rounded-[10px] flex items-center justify-center "]').should('be.visible')
cy.get('[class="border border-[#D7D7D7] h-[30px] w-[30px] rounded-[10px] flex items-center justify-center "]').should('be.visible')
 }
 leftArrow(){
    cy.get('[class="border border-[#D7D7D7] h-[30px] w-[30px] rounded-[10px] flex items-center justify-center "]').eq(0).click()
    cy.wait(2000)
 }
 rightArrow(){
    cy.get('[class="border border-[#D7D7D7] h-[30px] w-[30px] rounded-[10px] flex items-center justify-center "]').eq(1).click()
    cy.wait(2000)
 }
 verifyMonthDropdown(){
    cy.get('[class="capitalize"]').should('be.visible')
 }
 clickMonthDropdown(){
    cy.get('[class="capitalize"]').eq(0).click()
 }
verifyYearDropdown(){
    cy.get('[type="button"]').contains("2023").should("be.visible");
    // cy.get('[class="flex justify-center items-center px-2 py-2 gap-2 text-[#59595B] text-14px border border-[#D7D7D7] rounded-r-[10px] active:bg-[#7677F4] active:bg-opacity-20 active:border-[#7677F4]"]').should('be.visible')
}
clickYearDropdown(){
    cy.get('[type="button"]').contains("2023").click();
    // cy.get('[class="flex justify-center items-center px-2 py-2 gap-2 text-[#59595B] text-14px border border-[#D7D7D7] rounded-r-[10px] active:bg-[#7677F4] active:bg-opacity-20 active:border-[#7677F4]"]').click()
}
verifyYearArrows(){ 
  cy.get('[d="M5.07083 0L6.25 1.17875L2.35875 5.00167L6.25 8.82125L5.07083 10L0 5.00167L5.07083 0Z"]').should('be.visible')
  cy.get('[d="M1.17917 10L-4.76837e-07 8.82125L3.89125 4.99833L-4.76837e-07 1.17875L1.17917 0L6.25 4.99833L1.17917 10Z"]').should("be.visible");
}
clickLeftArrow(){
  cy.get('[d="M5.07083 0L6.25 1.17875L2.35875 5.00167L6.25 8.82125L5.07083 10L0 5.00167L5.07083 0Z"]').eq(0).click()
  cy.wait(2000)
}
clickRightArrow(){
  cy.get('[d="M1.17917 10L-4.76837e-07 8.82125L3.89125 4.99833L-4.76837e-07 1.17875L1.17917 0L6.25 4.99833L1.17917 10Z"]').eq(0).click({force:true})
  cy.wait(2000)
}
selectMonth(){
    cy.get('[class="absolute"]').eq(1).should('be.visible')
   cy.get('[class="absolute"]').eq(1).contains(cow.Months[9]).click();
   console.log(cow.Months[9],"this is month i am selecting");
//    cy.get('[class="react-datepicker__week"]').click()
}
selectDate(){
    cy.wait(2000)
    cy.get('[class="react-datepicker__month-container"]').contains(cow.calendarDates[10]).click()
}
getFutureDate(days, format = "DD-MMM-YYYY") {
        let futureDate = new Date();
        for (let i = 0; i < days; i++) {
            futureDate.setDate(futureDate.getDate() + 1);
        } console.log(futureDate,"fuure date iss");
        if (format === "DD-MM-YY") {
            var getYear = futureDate.toLocaleString("default", { year: "2-digit" });
            var getMonth = futureDate.toLocaleString("default", { month: "2-digit" });
            var getDay = futureDate.toLocaleString("default", { day: "2-digit" });
            return `${getDay}-${getMonth}-${getYear}`;
        } else if (format === "DD-MMM-YYYY")
            return futureDate.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "2-digit" }).replace("Sept", "Sep");

}
}
export default DateTime