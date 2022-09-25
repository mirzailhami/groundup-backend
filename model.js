const mongoose = require("mongoose");

const anomalySchema = new mongoose.Schema({
  timestamp: { required: true, type: Number },
  machine: { required: true, type: String },
  anomaly: { require: true, type: String },
  sensor: { require: true, type: String },
  soundClip: { require: true, type: String },
  comments: { require: true, type: String },
  reason: { require: true, type: String },
  action: { require: true, type: String },
});

const reasonSchema = new mongoose.Schema({
  machine: { required: true, type: String },
  reason: { required: true, type: String }
});

const actionSchema = new mongoose.Schema({
  name: { required: true, type: String }
});

module.exports = {
  anomaly: mongoose.model("Anomaly", anomalySchema, "Anomaly"),
  reason: mongoose.model("Reason", reasonSchema, "Reason"),
  action: mongoose.model("Action", actionSchema, "Action"),
};
