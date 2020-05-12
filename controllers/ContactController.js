const mailgun = require('mailgun-js');
const { apiKey, domain } = require('../config/mailgun');

const mg = mailgun({apiKey, domain})

const ContactController = class {
    send(req, res) {
        return mg.messages().send({
            from: 'no-reply@juanvargas.me',
            to: 'juanmvg2006@gmail.com',
            subject: 'New Message',
            html: `
                <h2 style="text-align: center">New contact message received!</h2>
                <p style="text-align: center">Name: ${req.body.name}</p>
                <p style="text-align: center">Email: ${req.body.email}</p>
                <p style="text-align: center">Phone: ${req.body.phone}</p>
                <p style="text-align: center">Message: ${req.body.message}</p>
            `
        }, function (error, body) {
            if(error){
                return res.json({
                    status: 'failure',
                    error: error
                });
            }

            return res.json({
                status: 'success'
            });
        });
    }
}

module.exports = ContactController;