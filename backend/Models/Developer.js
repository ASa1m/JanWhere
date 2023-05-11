const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DeveloperSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cmsid : {
    type: String,
    required: true
  },
  role : {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Developer = mongoose.model("developers", DeveloperSchema);
