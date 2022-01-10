import EntradaService from "../../services/EntradaService";

class InserirGastoGanhoManager{
    async inserirGanho(entrada){
        return await EntradaService.NovaEntrada(entrada).then(
            resposta => resposta && resposta.data
        )
    }

    async inserirGasto(gasto){
        return await EntradaService.NovaEntrada(gasto).then(
            resposta => resposta && resposta.data
        )
    }

    async listarEntradas(usuario){
        return await EntradaService.ListarEntradas(usuario).then(
            resposta => resposta && resposta.data
        )
    }

    async removerEntrada(id){
        return await EntradaService.RemoverEntrada(id).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new InserirGastoGanhoManager();