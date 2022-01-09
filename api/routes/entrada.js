const router = require('express').Router();
let Entrada = require('../models/entrada.model');

router.route('/').get((req, res) => {
  const usuario = req.body.usuario;

  Entrada.find({ usuario: usuario})
    .then(entradas => res.json(entradas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tipo = req.body.tipo;
  const categoria = req.body.categoria;
  const descricao = req.body.descricao;
  const valor = req.body.valor;
  const usuario = req.body.usuario;
  const data = req.body.data;

  const novaEntrada = new Entrada({data: data, descricao: descricao, valor: valor, usuario: usuario, categoria: categoria, tipo:tipo});

  novaEntrada.save()
    .then(() => res.status(200).json({status:"Entrada cadastrado"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req, res) => {
  const id = req.body.id;

  Entrada.deleteOne({_id: id})
    .then(() => res.status(200).json({status:"Entrada removida"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit').post((req, res) => {
  const id = req.body.id;
  const tipo = req.body.tipo;
  const descricao = req.body.descricao;
  const valor = req.body.valor;

  Entrada.updateOne({_id: id}, {tipo: tipo, descricao: descricao, valor: valor})
    .then(() => res.status(200).json({status:"Entrada atualizada"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

