function generateRandomGmail() {
  // Length of the random local part (you can adjust this as needed)
  const localPartLength = 10;
const localDomain=5
  // Generate a random local part
  const randomChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const domain = "abcdefghijklmnopqrstuvwxyz0123456789";
  let localPart = "";
  for (let i = 0; i < localPartLength; i++) {
    const randomIndex = Math.floor(Math.random() * randomChars.length);
    localPart += randomChars.charAt(randomIndex);
  }

    let localdomain = "";
    for (let i = 0; i < localDomain; i++) {
      const randomIndex = Math.floor(Math.random() * domain.length);
      localdomain += randomChars.charAt(randomIndex);
    }
  // Combine with the Gmail domain
  const gmailAddress = `${localPart}@${localdomain}.com`;

  return gmailAddress;
}

// Example usage:
const randomGmail = generateRandomGmail();
console.log(randomGmail);
export default generateRandomGmail