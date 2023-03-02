// import { createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import reducer from "./reducer/reducer";

const store = createStore(reducer);

export default store;