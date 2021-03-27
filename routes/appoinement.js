var express = require("express");
var router = express.Router();
const {
  cancelAppointment,
  createAppointment,
  editAppointment,
  getAllActiveAppointment,
  getTodaysAppointments,
} = require("../queries/appointment");

router.get("/", async (req, res) => {
  const result = await getTodaysAppointments();
  res.send(result);
});

router.get("/all", async (req, res) => {
  const result = await getAllActiveAppointment();
  res.send(result);
});

router.post("/create", async (req, res) => {
  const result = await createAppointment(req.body.data);
  res.send(result);
});

module.exports = router;
