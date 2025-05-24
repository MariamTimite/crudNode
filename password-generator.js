const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 8,
  numbers: true,
  symbols: true,
  uppercase: true
});

console.log('Generateur de mot de passe:', password);
