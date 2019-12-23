import { all, call } from 'redux-saga/effects';
import {userWatcher} from "./userSaga";

export function* rootSaga() {
    try {
        yield all([
            call(userWatcher),
        ]);
    } catch (e) {
        throw e;
    }
}
