export const GET_NEWS = 'GET_NEWS';
export const SET_NEWS = 'SET_NEWS';

export const setNews = (data) => ({
    type: SET_NEWS,
    payload: data,
});

const newsReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_NEWS:
            return { ...state, news: payload };
        case GET_NEWS: 
            return { ...state };
        default:
            return { ...state };
    }
}

export default newsReducer;