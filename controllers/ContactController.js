const Mailgun = new (require('../facades/Mailgun'));

const ContactController = class {
    async send(req, res) {
        try{
            let result = await Mailgun.send(req.body)

            if(result) {
                return res.json({
                    status: 'success'
                });
            } else {
                return res.json({
                    status: 'failure',
                    error: result
                });
            }
        } catch (ex) {
            return res.json({
                status: 'failure',
                error: error
            });
        }
    }
}

module.exports = ContactController;