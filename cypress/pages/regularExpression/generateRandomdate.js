function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
  // Generate random values for day, month, and year components
  const day = getRandomInt(1, 31); // Random day between 1 and 31
  const month = getRandomInt(1, 12); // Random month between 1 and 12
  const year = getRandomInt(23, 99); // Random year between 0 and 99 (assuming it's in the 20th or 21st century)

  // Format the date components in "dd/mm/yy" format
  const formattedDay = day.toString().padStart(2, "0"); // Ensure 2-digit day
  const formattedMonth = month.toString().padStart(2, "0"); // Ensure 2-digit month
  const formattedYear = year.toString().padStart(2, "0"); // Ensure 2-digit year

  // Combine the components to create the random date string
  const randomDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

  return randomDate;
}

// Example usage:
const randomDate = generateRandomDate();
console.log(randomDate);
export default generateRandomDate