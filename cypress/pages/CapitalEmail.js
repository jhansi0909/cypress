function generateValidRandomEmail() {
  const generateRandomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };

  const localPart = generateRandomString(10); // Adjust the length as needed
  const domain = 'gmail.com';

  const randomEmail = `${localPart}@${domain}`;
  return randomEmail;
}

export default generateValidRandomEmail