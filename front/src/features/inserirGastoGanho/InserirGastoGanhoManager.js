import GastoGanhoService from "../../services/EntradaService";

class InserirGastoGanhoManager{
    async inserirGanho(entrada){
        return await GastoGanhoService.NovaEntrada(entrada).then(
            resposta => resposta && resposta.data
        )
    }

    async inserirGasto(gasto){
        return await GastoGanhoService.NovaEntrada(gasto).then(
            resposta => resposta && resposta.data
        )
    }

    async listar(usuario){
        return await GastoGanhoService.ListarEntradas(usuario).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new InserirGastoGanhoManager();