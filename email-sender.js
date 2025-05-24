const nodemailer = require("nodemailer");

// Configurer le transporteur (avec vos informations d'identification)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "timitemariam789@gmail.com",
    pass: "",
  },
});

// Définir les options de l'e-mail
const mailOptions = {
  from: "timitemariam789@gmail.com",
  to: "matimite.digifemmes@gmail.com",
  subject: "Test NodeMailer",
  text: "Hello from Node.js!",
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Echec d'envoie d'email");
  } else {
    console.log("Email envoyé:", info.response);
  }
});
