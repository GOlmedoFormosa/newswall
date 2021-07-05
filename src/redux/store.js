import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import rootSagas from "./sagaManager";

const enhancers = [];
const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// Assemble Middleware
if (process.env.NODE_ENV === "development") {
  enhancers.push(composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  enhancers.push(applyMiddleware(...middlewares));
}

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSagas);
