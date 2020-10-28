const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  shortenLink: {
    type: String,
  },
});

const ShortenLink = mongoose.model("ShortenLink", LinkSchema);
module.exports = ShortenLink;