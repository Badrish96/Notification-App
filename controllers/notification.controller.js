const Notification = require("../models/notification.model");

exports.acceptNotificationRequest = async (req, res) => {
  try {
    const notificationObj = {
      subject: req.body.subject,
      recipientEmail: req.body.recipientEmail,
      content: req.body.content,
      requestor: req.body.requestor,
    };

    const notification = Notification.create(notificationObj);

    res.status(201).send({
      message: "Notification request accepted",
      trackingId: notification._id,
    });
  } catch (err) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
};
