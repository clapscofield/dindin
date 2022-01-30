import axios from "axios";

class InvestimentoService {
    async ListarInvestimentos(usuario) {
        return await axios.get("http://localhost:7000/investimento/", {
            usuario: usuario
        });
    }

    async NovoInvestimento(entrada) {
        return await axios.post("http://localhost:7000/investimento/add", {
            tipo: entrada.tipo,
            descricao: entrada.descricao,
            valor:  entrada.valor,
            usuario: entrada.usuario,
            categoria: entrada.categoria
        });
    }

    async RemoverInvestimento(id) {
        return await axios.delete("http://localhost:7000/investimento/delete", { data: {
            id: id
        }});
    }

    async EditarInvestimento(entrada) {
        return await axios.post("http://localhost:7000/investimento/edit", {
            tipo: entrada.tipo,
            descricao: entrada.descricao,
            valor:  entrada.valor,
            usuario: entrada.usuario,
            data: entrada.data,
            categoria: entrada.categoria,
            id: entrada.id
        });
    }
}

export default new InvestimentoService();