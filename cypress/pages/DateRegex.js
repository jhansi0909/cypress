function getRandomDate() {
  // Generate a random year within a range (e.g., between 2000 and 2023)
  const minYear = 1900;
  const maxYear = 2099;
  const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  
  // Generate a random month (between 1 and 12)
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  
  // Calculate the maximum number of days in the generated month
  const daysInMonth = new Date(randomYear, randomMonth, 0).getDate();
  
  // Generate a random day (between 1 and the maximum number of days)
  const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
  
  // Format the components into "dd/mm/yyyy" format
  const formattedDate = `${randomDay.toString().padStart(2, '0')}/${randomMonth.toString().padStart(2, '0')}/${randomYear}`;
  
  return formattedDate;
}

const randomDate = getRandomDate();
console.log(randomDate);

export default getRandomDate




