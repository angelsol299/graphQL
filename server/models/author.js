const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: number
});

modeule.exports = mongoose.model("Author", authorSchema);
