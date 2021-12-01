const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nain.pedroza@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nain.pedroza@gmail.com',
        subject: 'Sorry to see you leaving us',
        text: `It is a shame to see you go ${name}, hope to see you back again soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}