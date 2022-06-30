import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {reducers} from "./reducers";
const initalState = {};
const middleware = [thunk];
let store;
const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    reducers,
    initalState,
    compose(
      applyMiddleware(...middleware),
      ReactReduxDevTools
    )
  );
} else {
  store = createStore(
    reducers,
    initalState,
    compose(applyMiddleware(...middleware))
  );
}
export default store;