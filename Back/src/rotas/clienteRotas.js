import express from 'express';
import ClienteControle from '../controles/clienteControle.js';

const rotas = express.Router();

rotas.get('/clientes', ClienteControle.listarClientes);
rotas.get('/clientes/:id', ClienteControle.listarCliente);
rotas.post('/clientes', ClienteControle.cadastrarCliente);
rotas.put('/clientes/:id', ClienteControle.atualizarCliente);
rotas.delete('/clientes/:id', ClienteControle.excluirCliente);

export default rotas;