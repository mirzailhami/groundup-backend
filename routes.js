const express = require("express");
const router = express.Router();
const { anomaly, reason, action } = require("./model");

router.get("/anomalies", async (req, res) => {
  const data = await anomaly.find();
  res.json(data);
});

router.put("/anomaly/:id", async (req, res) => {
  const { id } = req.params;
  const { reason, action, comments } = req.body;

  try {
    const updatedAnomaly = await anomaly.updateOne(
      { id },
      {
        $set: {
          reason,
          action,
          comments,
        },
      }
    );
    res.json(updatedAnomaly);
  } catch (error) {
    res.json({ error: `Anomaly with ID ${id} does not exist in the database` });
  }
});

router.get("/reasons", async (req, res) => {
  const data = await reason.find();
  res.json(data);
});

router.get("/actions", async (req, res) => {
  const data = await action.find();
  res.json(data);
});

module.exports = router;
