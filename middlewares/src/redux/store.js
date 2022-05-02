// /// store for counter
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// // 1. in order to create/use/apply  middleware; we need to import it from redux library
// import { reducer } from "./reducer";

// // 2. create middleware 1
// const middleware1 = (store) => (next) => (action) => {
//   console.log("Entering Middleware 1"); // a. first this
//   console.log(
//     "this is a middleware which logs action to console - action : ",
//     action
//   ); // b. this gets printed;
//   next(action);// c.  the next middleware in pipeline if exists gets invoked; else reducer gets invoked;
//   console.log("Exiting Middleware 1"); // f. this gets printed then;
// };

// // 3. create middleware 2
// const middleware2 = (store) => (next) => (action) => {
//   console.log("Entering Middleware 2");//d. this gets printed;
//   action.payload = 3;
//   console.log(
//     "this is a middleware which modifies action object and also logs action to console - action : ",
//     action
//   ); // e. if there is no further middles; action gets dispatch; store makes it's changes and we exit this middleware from stack
//   next(action); // f. the next middleware if exists gets invoked else reducer gets invoked;
// };

// // 4. once we have defined our middlewares; we pass it to the applyMiddleware function like this:
// const middlewares = applyMiddleware(middleware1, middleware2);

// // 5. pass middlewares as the last argument to the createStore function;
// export const store = createStore(reducer, middlewares);

// store.subscribe(() => {
//   console.log("current store", store.getState());
// });




///store for todo

import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose
  } from "redux";
  import { todosReducer } from "./todo/reducer";
  import thunk from "redux-thunk";
  
  const rootReducer = combineReducers({ todos: todosReducer });
  
  // then you will use a middleware with some logic that can accomodate that;
  
  const ownThunk = (store) => (next) => (action) => {
    // this middleware will tell us the type of action that has been dispatched
    console.log("type of action is ", typeof action);
  
    // what if the action that gets dispatched is not an object and it is a function;
  
    if (typeof action === "function") {
      // in that scenario ; invoke that function;
      return action(store.dispatch);
  
      /*
        (dispatch) => {
            dispatch(getTodosLoading());
            fetch(`http://localhost:3001/todos`)
              .then((res) => res.json())
              .then((res) => dispatch(getTodosSuccess(res)))
                .catch(() => dispatch(getTodosError()));
          }
  
      */
    }
  
    // if action is object; move to next middleware if exists else move to reducer;
    next(action);
  };
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );
  
  export const store = createStore(rootReducer, enhancer);