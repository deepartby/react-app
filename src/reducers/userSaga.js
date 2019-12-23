import {takeEvery, put, call} from "redux-saga/effects";
import ApiService from "../services/ApiService";
import {setActiveUserA} from "../containers/usersActions";

export function* userWatcher() {
    yield takeEvery('GET_USER', getUser);
}

function* getUser(payload) {
    try {
        const user = yield call(() => ApiService.getUserById(payload.id));
        yield put(setActiveUserA(user));
    } catch (error) {
        console.log('getUserError');
    }
}
