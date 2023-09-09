const nodeMailer = require("nodemailer");

var emailTransporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "badrishchoubeystar@gmail.com",
    pass: "ewkhzkpxzjkcvhzn",
  },
});
