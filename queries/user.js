const User = require("../models/user.model");

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async (payload) => {
  return await User.create(payload);
};

const editUser = async (payload) => {
  const checkUser = await getUserById(payload.id);
  if (!checkUser) throw new Error("No user found");
  checkUser.name = payload.name;
  checkUser.email = payload.email;
  checkUser.phoneNumber = payload.phoneNumber;
  return checkUser.save();
};

module.exports = { getAllUsers, getUserById, createUser, editUser };
