const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5555;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

module.exports = { PORT, MONGO_CONNECTION_STRING };
