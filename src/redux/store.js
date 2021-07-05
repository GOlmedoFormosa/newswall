import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSagas from "./sagaManager";

const enhancers = [];
const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSagas);
