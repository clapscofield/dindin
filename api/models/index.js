const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.guerra = require("./guerra.model");
db.usuario = require("./usuario.model");
db.equipe = require("./equipe.model");

module.exports = db;