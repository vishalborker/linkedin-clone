import { call, put } from 'redux-saga/effects';
import { setPosts } from '../../ducks/posts';
import { requestGetPosts } from '../requests/posts';

export function* handleGetPosts(action) {
    const { payload } = action;
    try {
        const response = yield call(requestGetPosts, payload);
        yield put(setPosts(response));
    } catch(err) {
        console.log({err});
    }
}