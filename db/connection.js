const mongoose = require("mongoose");

const config = require("../config");

const db = mongoose.connect(config.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
