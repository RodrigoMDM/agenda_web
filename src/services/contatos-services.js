import axios from "axios";
import * as config from '../config/api-config';
import * as helper from '../helpers/auth-helper';
 
export const postContato = (data) => {
    return axios.post(`${config.getApiUrl()}/Contatos`, data)
        .then(
            response => {
                return response.data;
            }
        )
}
 
//Interceptador para fazer o envio do TOKEN
axios.interceptors.request.use(
    config => {
 
        //verificar se a requisição é para o endpoint /api/Contatos
        if(config.url.includes('/api/Contatos')){
 
            //obter o TOKEN gravado na localstorage
            var accessToken = helper.getAccessToken();
 
            //enviando o TOKEN no cabeçalho da requisição
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
 
        return config;
    },
    error => {
        Promise.reject(error);
    }
)


