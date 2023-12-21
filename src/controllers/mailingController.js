const sendEmail = require('../helpers/sendEmail');

const sendData = async (req, res, next) => {
    const { email, name, request, requestType } = req.body;

    sendEmail({
        to: 'engforuarmy@gmail.com',
        subject: 'New request from the Eng for UArmy form',
        html: `<h2>Дані про користувача:</h2>
        <p>Ім'я: ${name}</p>
        <p>Електронна пошта: ${email}</p>
        <p>Тип запиту: ${requestType}</p>
        <p>Запит: ${request}</p>
        `,
    });

    res.status(201).json({ message: 'Email sent success' }); 
};

module.exports = {
    sendData
}