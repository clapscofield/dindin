import GastoGanhoService from "../../services/EntradaService";

class InserirGastoGanhoManager{
    async inserirGanho(entrada){
        return await GastoGanhoService.NovaEntrada(entrada).then(
            resposta => resposta && resposta.data
        )
    }

    async inserirGasto(gasto){
        return await EntradaService.NovaEntrada(gasto).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CadastroEntradaManager();