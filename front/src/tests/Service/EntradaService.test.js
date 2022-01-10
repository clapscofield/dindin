import EntradaService from "../../services/EntradaService";
import axios from 'axios';
jest.mock('axios');

describe('Obter transacoes', () => {
  test('obter transacoes com sucesso', async () => {
    const usuario = "clari"
    // setup
    axios.get.mockImplementationOnce(() =>
        Promise.resolve([{
            valor: "1000", 
            descricao: "teste", 
            usuario:"clari", 
            categoria: "categoria teste", 
            data: "01/01/2000", 
            tipo: "entrada"
        }])
    );

    // work
    const transacoes = await EntradaService.ListarEntradas(usuario);

    // expect
    expect(transacoes).toEqual([{
        valor: "1000", 
        descricao: "teste", 
        usuario:"clari", 
        categoria: "categoria teste", 
        data: "01/01/2000", 
        tipo: "entrada"
    }]);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:7000/entrada/', {"usuario": "clari"});
  });

  test('inserir entrada com sucesso', async () => {
    const dados = {
        valor: "1000", 
        descricao: "teste", 
        usuario:"1234", 
        categoria: "categoria teste", 
        data: "01/01/2000", 
        tipo: "entrada"
    };
    // setup
    axios.post.mockImplementationOnce(() =>
        Promise.resolve({status:"Entrada cadastrada"})
    );

    // work
    const response = await EntradaService.NovaEntrada(dados);
    // expect
    expect(response).toEqual({status:"Entrada cadastrada"});
    expect(axios.post).toHaveBeenCalledTimes(1);
  });

  test('editar entrada com sucesso', async () => {
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
    axios.post.mockImplementationOnce(() =>
        Promise.resolve({status:"Entrada atualizada"})
    );

    // work
    const response = await EntradaService.EditarEntrada(dados);
    // expect
    expect(response).toEqual({status:"Entrada atualizada"});
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:7000/entrada/edit', {"categoria": "categoria teste", "data": "01/01/2000", "descricao": "teste", "id": "1234", "tipo": "entrada", "usuario": "clari", "valor": "1000"});

  });

});