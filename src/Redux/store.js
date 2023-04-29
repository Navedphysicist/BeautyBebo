// create store here
import { legacy_createStore as createStore ,combineReducers,applyMiddleware,compose } from "redux";
import { reducer } from "./reducer";
import  thunk from "redux-thunk"

const rootReducers = combineReducers({
  reducer:reducer
})


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


export const store = createStore(rootReducers,enhancer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
