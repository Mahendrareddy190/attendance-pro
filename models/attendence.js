const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
  names: {
    type: [],
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Attendence", attendenceSchema);
