const cron = require("node-cron");

const Notification = require("../models/notification.model");

const emailTransporter = require("../emailService");

cron.schedule("*/5 * * * * *", async () => {
  const notifications = await Notification.find({ status: "UN_SENT" });
  console.log(notifications);

  if (notifications) {
    notifications.forEach((notification) => {
      var emailObj = {
        to: notification.recipientEmail,
        subject: notification.subject,
        text: notification.content,
      };
      emailTransporter.sendMail(emailObj, async (err, data) => {
        if (!err) {
          console.log(`Email sent :: ${notification.recipientEmail}`);
          notification.status = "SENT";
          await notification.save();
        }
      });
    });
  }
});
