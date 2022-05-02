import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

// create store here
export const store = legacy_createStore(reducer, applyMiddleware(thunk));

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
