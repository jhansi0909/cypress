// function generateRandomText(length) {
//   const characters = 'abcdefghijklmnopqrstuvwxyz ';
//   let randomText = '';
//   for (let i = 0; i < length; i++) {
//     randomText += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return randomText;
//   const localPart = generateRandomString(15); // Adjust the length as needed
//   const randomText = `${localPart}`;
//   return randomName;
// }

// function isMatch(text, regex) {
//   return regex.test(text);
// }
// // const localPart=`${randomText}`

// const paragraphRegex = /^[a-z ]+$/; // Example regex for lowercase letters and space

// for (let i = 0; i < 5; i++) {
//   const randomText = generateRandomText(100); // Generating a random paragraph-like text
//   if (isMatch(randomText, paragraphRegex)) {
//     console.log(randomText);
//   }
// }

// export default generateRandomText


function generateRandomText() {
const generateRandomString = (length)=> {
  const characterPool = "abcdefghijklmnopqrstuvwxyz ";
  let randomName = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    randomName += characterPool.charAt(randomIndex);
  }

  return randomName;
}

const localPart = generateRandomString(5) // Adjust the length as needed
const randomName=`${localPart}`
return randomName
}
export default generateRandomText



