import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
