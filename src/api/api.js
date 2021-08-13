import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://api.github.com/",
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })


export const AuthApi = {

    AuthContext(login) {
        return instance.get(`users/${login}`)
    },
    UserContext(pages) {
        return instance.get(`search/users?q=${pages}&per_page=15`)
    }
}
