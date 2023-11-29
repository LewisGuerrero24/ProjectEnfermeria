const nodemailer = require('nodemailer');

const enviarCorreo = async(correo, usuario, contraseña) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // El servicio de correo electrónico que estás utilizando
        auth: {
            user: 'lewisguerrero20@gmail.com', // Tu correo electrónico
            pass: 'xgni pgkl emmr kytg' // Tu contraseña de correo electrónico
        }
    });

    let mailOptions = {
        from: 'lewisdev24@gmail.com', // Correo electrónico del remitente
        to: correo, // Correo electrónico del destinatario
        subject: 'Registro de usuario', // Asunto del correo electrónico
        text: `Bienvenido a MediMedicas! \nEstos son tus datos parra que accedas como usuarios 
        \n Usuario: ${usuario}\nContraseña: ${contraseña}` // Cuerpo del correo electrónico
    };

    await transporter.sendMail(mailOptions);
}

module.exports = {enviarCorreo,}

