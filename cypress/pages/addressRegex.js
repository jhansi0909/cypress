function generateValidRandomAddress() {
  const generateRandomString = (length) => {
    const village = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const state ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const postal="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?"
    //   ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomVillage = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * village.length);
      randomVillage += village.charAt(randomIndex);
    }
   let  randomState=""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * state.length);
      randomState += state.charAt(randomIndex);
    }

    let randomPostal = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * postal.length);
      randomPostal += state.charAt(randomIndex);
    }
    return randomPostal,randomVillage,randomState
  };
  const villageName=generateRandomString(10);
  const state=generateRandomString(10);
  const postalCode = generateRandomString(10); // Adjust the length as needed

  const randomEmail = `${villageName},${state},${postalCode}`;
  return randomEmail;
}
export default generateValidRandomAddress;
