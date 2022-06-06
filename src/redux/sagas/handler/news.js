import { call, put } from 'redux-saga/effects';
import { setNews } from '../../ducks/news';
import { requestGetNews } from '../requests/news';

export function* handleGetNews(action) {
    const { payload } = action;
    try {
        const response = yield call(requestGetNews, payload);
        yield put(setNews(response));
    } catch(err) {
        console.log({err});
    }
}