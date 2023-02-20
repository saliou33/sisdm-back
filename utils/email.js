const nodemailer = require('nodemailer');

module.exports = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.firstName = user.prenom;
        this.url = url;
        this.from =  `Sisdm Mail <${process.env.EMAIL_FROM}`
    }


    newTransport() {
        if (process.env.NODE_ENV === 'production') {
            return nodemailer.createTestAccount({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_GMAIL_USER,
                    pass: process.env.EMAIL_GMAIL_PASSWORD,
                }
            })
        }

        return nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    }

    async send(msg, subject) {
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject, 
            text: msg
        }

        await this.newTransport().sendMail(mailOptions);
    }

    async sendWelcome() {
        await this.send('BIENVENUE!!', 'Bienvenue à SISDM')
    }

    async sendPasswordReset() {
        await this.send(`Lien: ${this.url}`, 'Reinitialiser Mot de Passe')
    }
}

