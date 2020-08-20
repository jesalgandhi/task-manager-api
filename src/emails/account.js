const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'jesal@jesal.site',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you like it :)`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jesal@jesal.site',
        subject: 'Sad to see you go :(',
        text: `Please let us know, ${name}, why you left our app if you can. We strive to be the best!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}