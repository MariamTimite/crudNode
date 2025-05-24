const fs = require('fs');

// Créer et écrire dans le fichier
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) "Impossible d'ecrire dans le fichier";
  console.log('Fichier écris avec succès!');
});

// Lire le fichier
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) "Impossible de lire le fichier";
  console.log('Le contenu du fichier est:', data);
});