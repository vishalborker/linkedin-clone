import { call, put } from 'redux-saga/effects';
import { setNotifications } from '../../ducks/notifications';
import { requestGetNotifications } from '../requests/notifications';

export function* handleGetNotifications(action) {
    const { payload } = action;
    try {
        const response = yield call(requestGetNotifications, payload);
        yield put(setNotifications(response));
    } catch(err) {
        console.log({err});
    }
}