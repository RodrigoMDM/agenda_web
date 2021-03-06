import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailValidation from '../../validations/email-validation';
import passwordValidation from '../../validations/password-validation';
import * as services from '../../services/account-services';
import * as helper from '../../helpers/auth-helper';
 
export default function LoginForm() {
 
    //declarando as variáveis do componente
    const [mensagemErro, setMensagemErro] = useState('');
 
    //criando a estrutura para declaração de formulário
    const {
        control, //capturar cada campo do formulario
        handleSubmit, //capturar o evento SUBMIT do formulario
        formState: {
            errors //capturar os erros de validação dos campos
        },
        reset //utilizar para limpar o modificar o valor dos campos
    } = useForm();
 
    //função para executar o evento SUBMIT do formulario
    const onSubmit = (data) => { //data -> campos preenchidos no formulário
 
        //fazendo o envio dos dados para a API
        services.postLogin(data)
            .then( //retorno de sucesso
                result => {
                   
                    //gravar os dados em local storage
                    helper.signIn(result);
 
                    //redirecionar o usuário para a página de consulta de contatos
                    window.location.href = '/consultar-contatos';
                }
            )
            .catch( //retorno de erro
                e => {
                    console.log(e.response);
 
                    switch (e.response.status) {
 
                        case 401:
                            setMensagemErro(e.response.data);
                            break;
 
                        default:
                            setMensagemErro('Operação não pôde ser realizada');
                            break;
                    }
 
                }
            )
    }
 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
 
            {
                mensagemErro && <div className='alert alert-danger mt-2'>
                    <strong>{mensagemErro}</strong>
                </div>
            }
 
            <div className='mb-3'>
                <label>Email de acesso:</label>
 
                {/* campo para captura do 'email' */}
                <Controller
                    control={control}
                    name='email'
                    defaultValue=''
                    rules={{
                        validate: emailValidation
                    }}
                    render={
                        ({ field: { onChange, onBlur, value } }) => (
                            <input
                                type='email'
                                className='form-control'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )
                    }
                />
 
                {/* mensagens de erro de validação do campo 'email' */}
                {
                    errors.email && <div className='text-danger'>
                        {errors.email.message}
                    </div>
                }
 
            </div>
            <div className='mb-3'>
                <label>Senha de acesso:</label>
 
                {/* campo para captura do 'senha' */}
                <Controller
                    control={control}
                    name='senha'
                    defaultValue=''
                    rules={{
                        validate: passwordValidation
                    }}
                    render={
                        ({ field: { onChange, onBlur, value } }) => (
                            <input
                                type='password'
                                className='form-control'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )
                    }
                />
 
                {/* mensagens de erro de validação do campo 'senha' */}
                {
                    errors.senha && <div className='text-danger'>
                        {errors.senha.message}
                    </div>
                }
 
            </div>
            <div className='mb-3'>
                <div className='d-grid'>
                    <input type='submit' value='Acessar Agenda'
                        className='btn btn-dark' />
                </div>
            </div>
        </form>
    )
}


