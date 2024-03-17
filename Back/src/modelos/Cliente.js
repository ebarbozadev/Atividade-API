import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    email: { type: String },
    telefone: { type: String },
    dtnascimento: { type: String },
    cpf: { type: String },
    status: { type: String }
}, { versionKey: false });

const cliente = mongoose.model('clientes', clienteSchema);

export default cliente;