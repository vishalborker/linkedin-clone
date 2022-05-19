// User actions
export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const GET_USER_DATA = 'GET_USER_DATA';


// User action methods
export const setUser = (data) => ({
    type: SET_USER,
    payload: data,
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const getUser = (email) => ({
    type: GET_USER,
    payload: email,
});

export const getUserData = () => ({
    type: GET_USER_DATA,
});

// User initialState
const initialState = {
    user: null
};

// User reducers
const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case REMOVE_USER:
            return { ...state, user: null };
        case GET_USER_DATA:
            return { ...state };
        default:
            return state;
    }
}

export default userReducer;