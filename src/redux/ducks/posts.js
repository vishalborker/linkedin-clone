export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_DATA = 'GET_POSTS_DATA';
export const SET_POSTS = 'SET_POSTS';



export const getPosts = () => ({
    type: GET_POSTS,
});

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});

const initialState = {
    posts: null
};

// post reducers
const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload };
        case GET_POSTS_DATA:
            return { ...state };
        default:
            return state;
    }
}

export default postReducer;