const sendEmail = require('../helpers/sendEmail');

const sendData = async (req, res, next) => {
    const { email, name, request, requestType } = req.body;

    sendEmail({
        to: 'antifishka.zp@gmail.com',
        subject: 'New request from the Eng for UArmy form',
        html: `<h2>User data:</h2>
        <p>${name}</p>
        <p>${email}</p>
        <p>${requestType}</p>
        <p>${request}</p>
        `,
    });

    res.status(201).json({ message: 'Data send success' }); 
};

module.exports = {
    sendData
}