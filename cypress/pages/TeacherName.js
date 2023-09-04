function generateTeacherName() {
  const generateRandomString = (length) => {
    const characterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomName = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      randomName += characterPool.charAt(randomIndex);
    }

    return randomName;
  };

  const localPart = generateRandomString(15); // Adjust the length as needed
  const randomName = `${localPart}`;
  return randomName;
}
export default generateTeacherName;
