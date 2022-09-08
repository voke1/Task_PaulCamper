import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import sagas from './account/accountActions';

// const middlewares = [thunk];

import createSagaMiddleware from 'redux-saga';
const sagaMiddleWare = createSagaMiddleware();

export default store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas)










