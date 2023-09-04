function generateRandomURLRegex() {
  const protocols = ["http", "https"];
  const randomProtocol =
    protocols[Math.floor(Math.random() * protocols.length)];

  const randomString = Math.random().toString(36).substring(2); // Generate a random alphanumeric string

  const regexPattern = `${randomProtocol}:\/\/${randomString}`;

  return regexPattern;
}

// Generate and print 5 random regular expression URL patterns
for (let i = 0; i < 5; i++) {
  const randomURLPattern = generateRandomURLRegex();
  console.log(randomURLPattern);
}
export default generateRandomURLRegex
