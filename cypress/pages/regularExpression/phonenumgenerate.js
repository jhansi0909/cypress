function generateRandomPhoneNumber(minLength, maxLength) {
  const phoneNumberLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let phoneNumber = "";
  for (let i = 0; i < phoneNumberLength; i++) {
    phoneNumber += Math.floor(Math.random() * 10); // Generate a random digit
  }
  return phoneNumber;
}

function isPhoneNumberValid(phoneNumber) {
  const digitsOnly = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters
  return digitsOnly.length < 7 && digitsOnly.length > 11;
}

const randomPhoneNumber = generateRandomPhoneNumber(7, 11);
console.log("Generated Phone Number:", randomPhoneNumber);
console.log("Is Valid:", isPhoneNumberValid(randomPhoneNumber));

export default randomPhoneNumber;
