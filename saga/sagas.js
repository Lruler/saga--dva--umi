import { delay } from 'redux-saga'
import { put, takeEvery, all,call } from 'redux-saga/effects'


 function* helloSaga() {
  console.log('Hello Sagas!');
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}


function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchIncrementAsync)
  ])
}