import { all } from 'redux-saga/effects'
import { sagas } from './sagas';
import { selectedSaga } from './selectedSaga';


export default function* rootsaga() {
  yield all([
    ...sagas,
    ...selectedSaga
  ]);
}