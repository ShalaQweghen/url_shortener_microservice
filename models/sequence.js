var mongoose = require("mongoose");

var sequenceSchema = new mongoose.Schema({
    _id: String,
    seq: Number
});

module.exports = mongoose.model("Sequence", sequenceSchema);