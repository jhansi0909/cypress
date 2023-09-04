// function generateRandomString(length) {
//   const characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let randomString = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
//   }
//   return randomString;
// }

// function generateRandomPassword(length) {
//   return generateRandomString(length);
// }

// const randomPassword = generateRandomPassword(12); // Adjust the length as needed
// console.log(randomPassword);


// export default randomPassword

function generateValidRandomPassword() {
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

  const randomPassword = `${localPart}`;
  return randomPassword;
}

export default generateValidRandomPassword