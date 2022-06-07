export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_DATA = 'GET_POSTS_DATA';
export const SET_POSTS = 'SET_POSTS';
export const CREATE_POST = 'CREATE_POST';

export const getPosts = () => ({
    type: GET_POSTS,
});

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
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
        case CREATE_POST:
            return { ...state, posts: [ action.payload, ...state.posts ] };
        default:
            return state;
    }
}

export default postReducer;