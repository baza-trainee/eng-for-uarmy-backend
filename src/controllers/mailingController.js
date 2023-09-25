const sendEmail = require('../helpers/sendEmail');

const sendData = async (req, res, next) => {
    const { email, name, request, requestType } = req.body;

    sendEmail({
        to: 'antifishka.zp@gmail.com', // engforuarmy@gmail.com
        subject: 'User data',
        html: `<p>User data: ${email} ${name} ${request} ${requestType}</p>`,
    });

    res.status(200).json({ message: 'Data sent successful' }); 
};

module.exports = {
    sendData
}