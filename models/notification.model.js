const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  requester: {
    type: String,
  },
  status: {
    type: String,
    default: "UN_SENT",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});
module.exports = mongoose.model("Notification", notificationSchema);
