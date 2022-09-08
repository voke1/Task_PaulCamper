import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import sagas from "./account/accountActions";

import createSagaMiddleware from "redux-saga";
const sagaMiddleWare = createSagaMiddleware();

export default store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(sagas);
