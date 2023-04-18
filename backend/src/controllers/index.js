// Controller is responsible for controlling handlers for different actions
// by connecting to Service layer and make Service does the job
// for example: respond back to the client, redirect, rendering

const UserController = require("./user.controller");
const AuthController = require("./auth.controller");
const PlaylistController = require("./playlist.controller");
const TimerController = require("./timer.controller");
const TaskController = require("./task.controller");

module.exports = {
  UserController,
  AuthController,
  PlaylistController,
  TimerController,
  TaskController,
};
