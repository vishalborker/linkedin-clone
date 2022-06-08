import { takeLatest } from 'redux-saga/effects';
import { GET_NEWS } from '../ducks/news';
import { GET_NOTIFICATIONS } from '../ducks/notifications';
import { GET_POSTS } from '../ducks/posts';
import { GET_USER } from '../ducks/user';
import { handleGetNews } from './handler/news';
import { handleGetNotifications } from './handler/notifications';
import { handleGetPosts } from './handler/posts';
import { handleGetUser } from './handler/user';

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
    yield takeLatest(GET_NEWS, handleGetNews);
    yield takeLatest(GET_POSTS, handleGetPosts);
    yield takeLatest(GET_NOTIFICATIONS, handleGetNotifications)
}