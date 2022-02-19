import React from 'react';
import ConsultarContatosGrid from '../grids/ConsultarContatosGrid';


export default function ConsultarContatos() {
    return (
        <div className='container mt-3'>

            <div className='row'>
                <div className='cold-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Consulta de Contatos</h5>
                            <p className='class-text'>Listagem de contatos cadastrados.</p>
                            <ConsultarContatosGrid />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}