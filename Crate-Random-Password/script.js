document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", generatePassword);
});

function generatePassword() {
  const lengthInput = document.getElementById("length");
  const length = lengthInput.value || 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    password += charset[randIndex];
  }
  document.getElementById("password").innerText = password;
}
