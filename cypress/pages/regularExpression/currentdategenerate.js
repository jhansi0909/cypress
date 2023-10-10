function currentDate(){
    const currentDate = new Date();

    // Get the day, month, and year components from the date
    const day = currentDate.getDate().toString().padStart(2, "0"); // Ensure 2-digit format
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = (currentDate.getFullYear() % 100).toString().padStart(2, "0"); // Get the last 2 digits of the year

    // Format the date in dd/mm/yy format
    const formattedDate = `${day}/${month}/${year}`;
    cy.log(`Formatted Date: ${formattedDate}`);
return formattedDate
    // Log the formatted date
}
export default currentDate