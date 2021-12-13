import axios from "axios";

class GastoGanhoService {
    async ListarEntradas(usuario) {
        return await axios.get("http://localhost:7000/entrada/add", {
            usuario: usuario
        });
    }

    async NovaEntrada(entrada) {
        return await axios.post("http://localhost:7000/entrada/add", {
            tipo: entrada.tipo,
            descricao: entrada.descricao,
            valor:  entrada.valor,
            usuario: entrada.usuario
        });
    }

    async RemoverEntrada(id) {
        return await axios.delete("http://localhost:7000/entrada/delete", {
            id: id
        });
    }

    async EditarEntrada(entrada) {
        return await axios.patch("http://localhost:7000/entrada/edit", {
            tipo: entrada.tipo,
            descricao: entrada.descricao,
            valor:  entrada.valor,
            usuario: entrada.usuario,
            id: entrada._id
        });
    }
}

export default new EntradaService();