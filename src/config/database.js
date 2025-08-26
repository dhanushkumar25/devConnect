const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://dhanushan2346:TepG1UJIGiJ4fqo3@node.nmz4gha.mongodb.net/devConnect"
  );
};

module.exports = connectDB;
