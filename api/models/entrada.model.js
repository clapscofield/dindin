const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const entradaSchema = new Schema({
  tipo: { type: Number },
  descricao: { type: String },
  valor: { type: Number},
  usuario: { type: String },
}, {
  timestamps: true,
}, { collection : 'Entradas' });

const Entradas = mongoose.model('Entradas', entradaSchema);

module.exports = Entradas;