const  GET_USER_DATA = 'GET_USER_DATA';
const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
const  GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';
const  REMOVE_USER_DATA = 'REMOVE_USER_DATA';

let initialState = {
    user:'',
    avatar_url:'',
    html_url:'',
    loading:false,
    error:null
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USER_DATA:
            return {error: null, loading: true};
        case GET_USER_DATA_SUCCESS:
            return {error: null,loading: false,
                avatar_url:action.payload.avatar_url,
                user:action.payload.login,
                html_url:action.payload.html_url,
               }
        case GET_USER_DATA_ERROR:
            return {error:action.payload,loading: false};
            case REMOVE_USER_DATA:
            return initialState;
        default:return state;
    }

}
