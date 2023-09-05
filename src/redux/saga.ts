import { takeEvery } from "redux-saga/effects";
import {
  POST_ADD_TODO,
  FETCH_TODO,
  UPDATE_TODO,
  MARK_DONE_TODO,
  DELETE_TODO,
} from "redux/feature/todo/todoSaga";
import { LOGIN, SIGNUP } from "redux/feature/auth/authSaga";
function* watchAll(): Generator<any, void, any> {
  yield takeEvery("todo/fetchTodo", FETCH_TODO);
  yield takeEvery("todo/addTask", POST_ADD_TODO);
  yield takeEvery("todo/updateTask", UPDATE_TODO);
  yield takeEvery("todo/taskMarkDone", MARK_DONE_TODO);
  yield takeEvery("todo/deleteTask", DELETE_TODO);

  yield takeEvery("auth/login", LOGIN);
  yield takeEvery("auth/signup", SIGNUP);
}

export default watchAll;
