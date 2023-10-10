function generateRandomName() {
  const generateRandomString = (length) => {
    const characterPool =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let randomName = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      randomName += characterPool.charAt(randomIndex);
    }

    return randomName;
  };

  const localPart = generateRandomString(10); // Adjust the length as needed
  const randomName = `${localPart}`;
  return randomName;
}
export default generateRandomName;
