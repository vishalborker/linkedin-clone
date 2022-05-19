import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../ducks/user';
import { handleGetUser } from './handler/user';

export function* watcherSaga() {
    console.log('Watcher Saga Running and intercepting requests');
    yield takeLatest(GET_USER, handleGetUser);
}