import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import cliente from './clienteRotas.js';

const rotas = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({ origin: "*" }));
    app.use(cors({
        origin: 'http://localhost:3000', // Substitua por URL do front-end
        credentials: true,
    }));

    app.route('/').get((req, res) => res.status(200).json({ mensagem: 'Página inicial' }));
    app.use(express.json(), cliente);
}

export default rotas;