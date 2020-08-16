import {take,put,select} from 'redux-saga/effects';
import {v4} from 'uuid';
import * as mutations from './mutations';

export function* taskCreationSaga() {
    while (true) {
        const {groupId} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerId = 'U1';
        const taskId = v4();
        console.log('what the fuck work');
        yield put(mutations.createTask(taskId, groupId, ownerId));
        console.log(groupId);
    }
}