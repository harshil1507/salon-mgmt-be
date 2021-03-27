const Appointment = require("../models/appointment.model");

const createAppointment = async (payload) => {
  return await Appointment.create(payload);
};

const editAppointment = async (payload) => {
  const checkAppointment = await Appointment.findById(payload.id);
  if (!checkAppointment) throw new Error("No appointment found");
  checkAppointment.date = payload.date;
  return checkAppointment.save();
};

const getTodaysAppointments = async () => {
  let today = new Date(new Date().setUTCHours(00, 00, 00, 00));
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  tomorrow = new Date(tomorrow);
  return await Appointment.find({
    date: { $gte: today, $lt: tomorrow },
    active: true,
  });
};

const cancelAppointment = async (id) => {
  await Appointment.findByIdAndUpdate(id, { active: false });
};

const getAllActiveAppointment = async () => {
  let today = new Date(new Date().setUTCHours(00, 00, 00, 00));
  return await Appointment.find({
    date: { $gte: today },
    active: true,
  });
};

const getAppointmentById = async (id) => {
  return await Appointment.findById(id);
};

module.exports = {
  createAppointment,
  editAppointment,
  getTodaysAppointments,
  cancelAppointment,
  getAllActiveAppointment,
  getAppointmentById,
};
