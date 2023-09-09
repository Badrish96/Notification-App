const express = require("express");
const mongoose = require("mongoose");

const dbConfig = require("./configs/db.config");

const app = express();

app.use(express.json());

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to DB");
});

db.once("open", () => {
  console.log("Connected to Database");
});
require("./routes/notification.route")(app);

require("./scheduler/email.scheduler");

app.listen(5500, () => {
  console.log(`Server started on PORT ${5500}`);
});
