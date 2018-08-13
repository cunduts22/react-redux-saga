import { all,fork } from 'redux-saga/effects'

import {watchFetchBooks} from './books'
import {userSaga} from './user.js'
import {watchPhoto} from './photo'
export default function* rootSaga() {
    // yield call(watchFetchBooks)
    yield all([
        fork(userSaga),
        fork(watchFetchBooks),
        fork(watchPhoto)
    ])
}
