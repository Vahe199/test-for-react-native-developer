import {AuthApi} from "../../api/api";

const  FETCH_USERS_DATA = 'FETCH_USERS_DATA';
const FETCH_USERS_DATA_SUCCESS = 'FETCH_USERS_DATA_SUCCESS';
const  FETCH_USERS_DATA_ERROR = 'FETCH_USERS_DATA_ERROR';


export const FetchUsersData = (pages) => async (dispatch) => {
    try {
        dispatch({type:FETCH_USERS_DATA})
        const {data} = await AuthApi.UserContext(pages)
        dispatch({type:FETCH_USERS_DATA_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:FETCH_USERS_DATA_ERROR,payload:'something went wrong'})
    }
}
