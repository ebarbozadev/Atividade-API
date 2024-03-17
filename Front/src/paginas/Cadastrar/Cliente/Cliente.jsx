import { useEffect, useState } from 'react';
import style from './cliente.module.css';

function Cliente() {
    const [clienteAtivo, setClienteAtivo] = useState(true);

    const abaixarCliente = () => {
        setClienteAtivo(!clienteAtivo);

        fecharCliente();
    };

    function fecharCliente() {
        const arquivo = document.getElementById('dropdown');

        if (clienteAtivo === true) {
            arquivo.style.display = 'none';

            console.log(arquivo)
        } else {
            arquivo.style.display = 'block';
        }
    }

    function ativarBotoes() {
        const inputs = document.getElementsByTagName('input');

        for (let index = 0; index < inputs.length; index++) {
            for (let input in inputs) {
                console.log(input.value);
            }
            
        }
        
        console.log(inputs);
    }

    useEffect(() => {
        ativarBotoes();
    }, [])

    return (
        <section className={style.formulario}>
            <form action="http://localhost:8000/clientes" method="post">
                <h2 onClick={abaixarCliente}>Dados Pessoais</h2>
                <div id='dropdown'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui" required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu melhor e-mail aqui" required />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone aqui" required />

                    <label htmlFor="dtnascimento">Data de Nascimento</label>
                    <input type="date" name="dtnascimento" id="dtnascimento" placeholder="Digite sua data de nascimento aqui" required />

                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF aqui" required />

                    <label htmlFor="status" className={style.status}>
                        Status
                        <input type="checkbox" name="status" id="status" />
                    </label>
                </div>

                <div className={style.botoes}>
                    <button type="submit">Enviar</button>
                    <button type="reset">Resetar</button>
                </div>
            </form>
        </section>
    );
}

export default Cliente;