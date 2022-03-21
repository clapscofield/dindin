import axios from "axios";

class GastoGanhoService {
    async ListarEntradas(usuario) {
        return await axios.get("http://localhost:7000/entrada/", {
            usuario: usuario
        });
    }

    async NovaEntrada(entrada) {
        return await axios.post("http://localhost:7000/entrada/add", {
            data: entrada.data,
            categoria: entrada.categoria,
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
            data: entrada.data,
            categoria: entrada.categoria,
            descricao: entrada.descricao,
            valor:  entrada.valor,
            usuario: entrada.usuario,
            id: entrada._id
        });
    }
}

export default new EntradaService();