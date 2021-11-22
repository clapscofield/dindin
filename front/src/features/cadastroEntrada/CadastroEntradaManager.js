import EntradaService from "../../services/EntradaService";

class CadastroEntradaManager{
    async cadastrarUsuario(entrada){
        return await EntradaService.NovaEntrada(entrada).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CadastroEntradaManager();