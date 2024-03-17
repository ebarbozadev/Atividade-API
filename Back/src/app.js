import express from 'express';
import rotas from './rotas/index.js';
import conectarNoBanco from './config/db.js';

const app = express();
const conexao = await conectarNoBanco();

rotas(app)

conexao.on('error', (erro) => console.log('Erro ao conectar no banco de dados'));
conexao.once('open', () => console.log('Sucesso ao conectar no banco de dados'));

export default app;