// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateRandomDate() {
//   const year = 2023; // Set the year to 2023.
//   const month = getRandomInt(1, 12);
//   const day = getRandomInt(1, 28); // Assuming all months have up to 28 days for simplicity.

//   // Ensure the date is in a valid range (e.g., February 29th for leap years).
//   if (month === 2 && day > 28) {
//     day = 28;
//   }

//   // Add leading zeros to day and month if they are less than 10.
//   const formattedDay = day < 10 ? `0${day}` : day;
//   const formattedMonth = month < 10 ? `0${month}` : month;

//   const date = `${formattedDay}/${formattedMonth}/${year}`;
//   return date;
// }


// const randomDate = generateRandomDate();
// console.log(randomDate);

// export default randomDate
