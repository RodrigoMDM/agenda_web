import React from 'react';
import { NavLink } from 'react-router-dom';
 
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Projeto REACT Agenda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page"
                                to="/">
                                Acessar Conta
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                to="/crie-sua-conta">
                                Crie sua Conta
                            </NavLink>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Gerenciar Contatos
                            </a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li>
                                    <NavLink className="dropdown-item"
                                        to="/cadastrar-contatos">
                                        Cadastrar Contatos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item"
                                        to="/consultar-contatos">
                                        Consultar Contatos
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}




