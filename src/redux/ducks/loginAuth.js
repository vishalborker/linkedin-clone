const SET_LOGIN = 'setLogin';
const SET_LOGOUT = 'setLogout';

export const setLogin = () => ({
    type: SET_LOGIN
});

export const setLogout = () => ({
    type: SET_LOGOUT
});

const initialState = {
    login: false
}

const loginAuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN: 
            return { ...state, login: true };

        case SET_LOGOUT:
            return { ...state, login: false };

        default:
            return state;
    }
}

export default loginAuthReducer;

