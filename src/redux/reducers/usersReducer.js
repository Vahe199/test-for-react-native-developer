const  FETCH_USERS_DATA = 'FETCH_USERS_DATA';
const FETCH_USERS_DATA_SUCCESS = 'FETCH_USERS_DATA_SUCCESS';
const  FETCH_USERS_DATA_ERROR = 'FETCH_USERS_DATA_ERROR';

let initialState = {
    users:[],
    loading:false,
    error:null
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_USERS_DATA:
            return {error: null, loading: true};
        case FETCH_USERS_DATA_SUCCESS:
            return {error: null,loading: false,
                users:action.payload.items}
        case FETCH_USERS_DATA_ERROR:
            return {error:action.payload,loading: false};
        default:return state;
    }

}
