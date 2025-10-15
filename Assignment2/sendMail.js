const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pritdedaniya5@gmail.com",
        pass: "dojx wqdm pypl cbiq"
    }
});

let mailOptions = {
    from: "pritdedaniya5@gmail.com",
    to: "pritdedaniya5@gmail.com",
    subject: "Test Email from Node.js",
    text: "Hello, this is a test email sent using Nodemailer!"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent successfully:", info.response);
    }
});
