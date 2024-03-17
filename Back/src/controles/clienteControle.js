import cliente from "../modelos/Cliente.js";

class ClienteControle {
    static async listarClientes(req, res) {
        try {
            const clientes = await cliente.find({});

            res.status(201).json(clientes);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar clientes!', erro: error });
        }
    }

    static async listarCliente(req, res) {
        try {
            const id = req.params.id;
            const clienteEncontrado = await cliente.findById(id);

            res.status(200).json(clienteEncontrado);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar cliente!', erro: error });
        }
    }

    static async cadastrarCliente(req, res) {
        try {
            const clienteACadastrar = req.body;

            await cliente.create(clienteACadastrar);

            res.status(200).json({ mensagem: 'Cliente cadastrado!' });
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao cadastrar cliente!', erro: error });
        }
    }

    static async atualizarCliente(req, res) {
        try {
            const id = req.params.id;
            const mudancas = req.body;

            await cliente.findByIdAndUpdate(id, mudancas);

            res.status(200).json({ mensagem: 'Cliente atualizado!' });
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao cadastrar cliente!', erro: error });
        }
    }

    static async excluirCliente(req, res) {
        try {
            const id = req.params.id;

            await cliente.findByIdAndDelete(id);

            res.status(200).json({ mensagem: 'Cliente excluído!' });
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao cadastrar cliente!', erro: error });
        }
    }
}

export default ClienteControle;