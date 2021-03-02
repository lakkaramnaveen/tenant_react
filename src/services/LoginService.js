import axios from 'axios';

const USERS_REST_API_LOGIN_URL = 'http://localhost:9090/owner/login/';

class LoginService {
    getUser() {
        return axios.get(USERS_REST_API_LOGIN_URL);
    }
}

export default new LoginService();