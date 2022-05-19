import { call , put } from 'redux-saga/effects';
import { setUser } from '../../ducks/user';
import { requestGetUser } from '../requests/user';

export function* handleGetUser(action) {
    const { payload } = action;
    try {
        const response = yield call(requestGetUser, payload);
        yield put(setUser(response));
    } catch(err) {
        console.log({err});
    }
}