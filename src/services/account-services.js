import axios from 'axios';

//função para fazer uma requisição para o endpoint de login

export const postLogin = (data) => {
    //utilizar o AXIOS para fazer a requisação para a API
    return axios.post(
        'http://projetocontatos1-001-site1.itempurl.com/api/Account/Login',
        data /* datos submetidos para a API (Request Body) */
    ).then(
        //Caputarar e retornar a resposta da API
        responde => {
            return responde.data;
        }
    )
}