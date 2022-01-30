import InvestimentoService from "services/InvestimentoService";

class InvestimentoManager{
    async inserirInvestimento(investimento){
        return await InvestimentoService.NovoInvestimento(investimento).then(
            resposta => resposta
        )
    }

    async listarInvestimentos(usuario){
        return await InvestimentoService.ListarInvestimentos(usuario).then(
            resposta => resposta && resposta.data
        )
    }

    async removerInvestimentos(id){
        return await InvestimentoService.RemoverInvestimento(id).then(
            resposta => resposta && resposta.data
        )
    }

    async editarInvestimento(dados){
        return await InvestimentoService.EditarInvestimento(dados).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new InvestimentoManager();