function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@";
  var passwordLength = document.getElementById("passwordLenght").value;
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

//// RETORNAR VALOR AO INPUT RANGE

const passwordLength = document.getElementById("passwordLenght");
const valorRetorno = document.getElementById("valorRetorno");

passwordLength.addEventListener("input", function () {
  valorRetorno.textContent = passwordLength.value;
});
