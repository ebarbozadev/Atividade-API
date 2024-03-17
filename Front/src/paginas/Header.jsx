import React, { useState } from 'react';
import style from './header.module.css';
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <header className={style.header}>
            <h1><Link to='/'>Stor<span>e</span></Link></h1>
            <div className={style.opcoes}>
                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li onClick={toggleDropdown} className={style.cadastrar}>
                        Cadastrar
                    </li>
                    {isOpen && (
                        <div id='dropdown' className={style.cadastrarDropdown}>
                            <Link onClick={toggleDropdown} to='/clientes'>Clientes</Link>
                            <Link onClick={toggleDropdown} to='/enderecos'>Endereço</Link>
                            <Link onClick={toggleDropdown} to='/telefones'>Telefone</Link>
                        </div>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
