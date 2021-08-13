import {AuthApi} from "../../api/api";
import {AsyncStorage} from "react-native";


const  GET_USER_DATA = 'GET_USER_DATA';
const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
const  GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';



export const getUserData = (login) => async (dispatch) => {
    try {
        dispatch({type:GET_USER_DATA})
        const {data} = await AuthApi.AuthContext(login)
        dispatch({type:GET_USER_DATA_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:GET_USER_DATA_ERROR,payload:'something went wrong'})
    }
}
