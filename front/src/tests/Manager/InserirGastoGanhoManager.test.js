
import axios from "axios";
import InserirGastoGanhoManager from "../../features/inserirGastoGanho/InserirGastoGanhoManager";
jest.mock('axios');

it("Inserir gasto", async () => {
  const dados = {
    valor: "1000", 
    descricao: "teste", 
    usuario:"1234", 
    categoria: "categoria teste", 
    data: "01/01/2000", 
    tipo: "saida"
  };
  // setup
  axios.post.mockImplementationOnce(() =>
    Promise.resolve({
      status:"Entrada cadastrada"
    })
  );

  // work
  const resposta = await InserirGastoGanhoManager.inserirGasto(dados);

  // expect
  expect(resposta).toEqual({status:"Entrada cadastrada"});
  expect(axios.post).toHaveBeenCalledTimes(1);
});

it("Inserir ganho", async () => {
  const dados = {
    valor: "1000", 
    descricao: "teste", 
    usuario:"1234", 
    categoria: "categoria teste", 
    data: "01/01/2000", 
    tipo: "saida"
  };
  // setup
  axios.post.mockImplementationOnce(() =>
    Promise.resolve({
      status:"Entrada cadastrada"
    })
  );

  // work
  const resposta = await InserirGastoGanhoManager.inserirGanho(dados);

  // expect
  expect(resposta).toEqual({status:"Entrada cadastrada"});
  expect(axios.post).toHaveBeenCalledTimes(1);
});

it("Listar entradas", async () => {
  const usuario = "clari";
  const dados = {
    valor: "1000", 
    descricao: "teste", 
    usuario:"clari", 
    categoria: "categoria teste", 
    data: "01/01/2000", 
    tipo: "entrada",
    id: "1234"
};
  // setup
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: dados
    })
  );

  // work
  const entradas = await InserirGastoGanhoManager.listarEntradas(usuario);

  // expect
  expect(entradas).toEqual(dados);
  expect(axios.get).toHaveBeenCalledTimes(1);
});