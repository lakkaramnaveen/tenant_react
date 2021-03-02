import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:9090/owner/tenant/';

class UserService {
    getUser() {
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();