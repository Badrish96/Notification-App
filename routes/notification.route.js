const notificationController = require("../controllers/notification.controller");

module.exports = (app) => {
  app.post(
    "/notificationService/api/v1/notification",
    notificationController.acceptNotificationRequest
  );
};
