var mongoose = require("mongoose");

var urlSchema = new mongoose.Schema({
    _id: Number,
    org_url: String
});

module.exports = mongoose.model("Url", urlSchema);