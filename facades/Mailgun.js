const mailgun = require('mailgun-js');
const { apiKey, domain } = require('../config/mailgun');

const mg = mailgun({apiKey, domain})

const Mailgun = class {
    send(data) {
        return mg.messages().send({
            from: 'no-reply@juanvargas.me',
            to: 'juanmvg2006@gmail.com',
            subject: 'New Message',
            html: this.content(data)
        });
    }

    content(data) {
        return `
            <h2 style="text-align: center">New contact message received!</h2>
            <h4 style="text-align: center">Name: ${data.name}</h4>
            <h4 style="text-align: center">Email: ${data.email}</h4>
            <h4 style="text-align: center">Phone: ${data.phone}</h4>
            <h4 style="text-align: center">Message: ${data.message}</h4>
        `
    }
}

module.exports = Mailgun