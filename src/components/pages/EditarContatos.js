import React from 'react';
import EditarCotantatosForm from '../forms/EditarContatosForm';

export default function EditarContatos() {
    return (

        <div className='container mt-3'>
            <div className='row'>
                <div className='cold-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Edição  de Contatos</h5>
                            <p className='class-text'>Preencha os campos para alterar os dados do contato.</p>
                            <EditarCotantatosForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}