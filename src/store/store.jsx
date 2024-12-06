import { legacy_createStore as createStore } from 'redux'
import appReducers from "./reducers";

let store = createStore(appReducers);

export default store;