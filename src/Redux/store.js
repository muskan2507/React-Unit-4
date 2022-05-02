// create store here
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose
} from "redux";
import { reducer } from "./reducer";

import thunk from "redux-thunk";
  const ownThunk = (store) => (next) => (action) => {
  
    if (typeof action === "function") {
          return action(store.dispatch);
    }
    next(action);
  };
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          
        })
      : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    
  );
  
  export const store = createStore(reducer, enhancer);
// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
