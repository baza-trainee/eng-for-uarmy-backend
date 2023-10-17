// SendGrid service
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    try {
        const email = { ...data, from: 'engforuarmy.web@gmail.com' };
        
        await sgMail.send(email);
    } catch (error) {
        console.log("error", error);
    }
    
};  

module.exports = sendEmail;