const SET_USER = 'setUser';
const REMOVE_USER = 'removeUser';

export const setUser = (data) => ({
    type: SET_USER,
    payload: data
});

export const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, user: action.payload }
        case REMOVE_USER:
            return {...state, user: null }
        default:
            return state;
    }
}

export default userReducer;