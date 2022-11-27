import data from "./data";
import { legacy_createStore as createStore } from "redux";

const initialState = {};
const reducer = (state, action) => {
  return { products: data.products };
};

const store = createStore(reducer, initialState);

export default store;
