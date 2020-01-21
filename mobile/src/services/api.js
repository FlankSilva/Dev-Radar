import axios from 'axios'

const api = axios.create({
    //Refatorar essa rota que não está pegando os dado do backend
    baseURL: 'exp://xs-wqz.anonymous.mobile.exp.direct:3333',
})

export default api