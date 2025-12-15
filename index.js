const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let password = "";
for (let i = 0; i < 12; i++) {
  const randomChar = `${chars[Math.floor(Math.random() * chars.length)]}`;
  password += randomChar;
}

console.log("Generated password:", password);
